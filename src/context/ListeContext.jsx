import { createContext, useState, useContext, useEffect } from "react";
import { useFridge } from "./FridgeContext";

const ListeContext = createContext();

export function ListeProvider({ children }) {
  const { ingredients } = useFridge();
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const frigoIngredients = ingredients.map((i) => i.toLowerCase());
        const filtered = data.filter((recette) =>
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
