import { createContext, useState, useContext } from "react";

const FridgeContext = createContext();

export function FridgeProvider({ children }) {
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
