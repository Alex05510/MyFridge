import { NavLink } from "react-router";
import { useState } from "react";
import { useFridge } from "../context/FridgeContext";

export default function Add() {
  const [ingredient, setIngredient] = useState("");
  const { ingredients, setIngredients } = useFridge();

  const handleAddIngredient = () => {
    // ajouter un ingredient
    if (ingredient.trim() !== "") {
      // crée une nouvelle liste d'ingredient et ajouter le nouveau
      setIngredients([...ingredients, ingredient]);
      // vider la zone de texte une fois l'ingredient ajouté
      setIngredient("");
    }
  };

  const handleDeleteIngredient = (index) => {
    // supprimé l'ingredient avec son index
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <section className="add">
      <h2>Ajouter un ingrédient</h2>
      <input
        className="ingredient-input"
        type="text"
        value={ingredient}
        // mettre à jour l'état de l'ingredient
        onChange={(e) => setIngredient(e.target.value)}
      />
      <br />
      <button
        // appel de la fonction pour ajouter un ingrédient
        onClick={handleAddIngredient}
        className="primary-link ingredient-btn"
      >
        Ajouter un ingrédient
      </button>
      <ul className="ingredient-list">
        <li>
          <b>Dans mon frigo il y a :</b>
        </li>
        {ingredients.map((item, index) => (
          <li key={index} className="ingredient-item">
            {item}
            <button
              className="delete-btn"
              // appel la fonction pour supprimer un ingrédient
              onClick={() => handleDeleteIngredient(index)}
              style={{ marginLeft: 8 }}
            >
              <img src="pictos/croix.png" alt="Delete" className="Xicon" />
            </button>
          </li>
        ))}
      </ul>

      <NavLink
        to="/suggestions"
        className="primary-link ingredient-link"
        style={{ fontSize: "32px" }}
      >
        GO
      </NavLink>
    </section>
  );
}
