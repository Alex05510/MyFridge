import { createContext, useState, useContext } from "react";

const FridgeContext = createContext();

// Provider pour gérer les ingrédients du frigo
export function FridgeProvider({ children }) {
  // État pour stocker les ingrédients
  const [ingredients, setIngredients] = useState([]);

  return (
    <FridgeContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </FridgeContext.Provider>
  );
}

export function useFridge() {
  return useContext(FridgeContext);
}
