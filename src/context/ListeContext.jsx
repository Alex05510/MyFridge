import { createContext, useState, useContext, useEffect } from "react";
import { useFridge } from "./FridgeContext";

const ListeContext = createContext();

export function ListeProvider({ children }) {
  const { ingredients } = useFridge();
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    // Charger les recettes et les ingrédients du frigo depuis le fichier JSON
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Filtrer les recettes en fonction des ingrédients du frigo
        const frigoIngredients = ingredients.map((i) => i.toLowerCase());
        //filtre les recettes pour garder celle du frigo
        const filtered = data.filter((recette) =>
          // Vérifie si tous les ingrédients de la recette sont dans le frigo
          recette.ingredients.every((ing) =>
            frigoIngredients.includes(ing.nom.toLowerCase())
          )
        );
        setRecettes(filtered);
      });
  }, [ingredients]);

  return (
    <ListeContext.Provider value={{ recettes, setRecettes }}>
      {children}
    </ListeContext.Provider>
  );
}

export function useListe() {
  return useContext(ListeContext);
}
