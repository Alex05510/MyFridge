import { createContext, useContext, useEffect, useState } from "react";

const FavorisContext = createContext();

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    // Charger les favoris depuis le localStorage
    const stored = JSON.parse(localStorage.getItem("favoris") || "[]");
    setFavoris(stored);
  }, []);

  const addFavori = (id) => {
    // Ajouter un favori
    if (!favoris.includes(id)) {
      // Créer une nouvelle liste de favoris et ajouter le nouveau
      const updated = [...favoris, id];
      setFavoris(updated);
      // Sauvegarder les favoris dans le localStorage
      localStorage.setItem("favoris", JSON.stringify(updated));
    }
  };

  const removeFavori = (id) => {
    // Supprimer un favori
    const updated = favoris.filter((favId) => favId !== id);
    // mettre à jour l'état des favoris
    setFavoris(updated);
    // Supprimer les favoris du localStorage
    localStorage.setItem("favoris", JSON.stringify(updated));
  };

  // Vérifier si un ID est dans les favoris
  const isFavori = (id) => favoris.includes(id);

  return (
    <FavorisContext.Provider
      value={{ favoris, addFavori, removeFavori, isFavori }}
    >
      {children}
    </FavorisContext.Provider>
  );
}

export function useFavoris() {
  return useContext(FavorisContext);
}
