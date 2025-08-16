import { createContext, useContext, useEffect, useState } from "react";
import { useFridge } from "./FridgeContext";

const FavorisContext = createContext();

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoris") || "[]");
    setFavoris(stored);
  }, []);

  const addFavori = (id) => {
    if (!favoris.includes(id)) {
      const updated = [...favoris, id];
      setFavoris(updated);
      localStorage.setItem("favoris", JSON.stringify(updated));
    }
  };

  const removeFavori = (id) => {
    const updated = favoris.filter((favId) => favId !== id);
    setFavoris(updated);
    localStorage.setItem("favoris", JSON.stringify(updated));
  };

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
