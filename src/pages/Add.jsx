import { NavLink } from "react-router";
import { useState } from "react";
import { useFridge } from "../context/FridgeContext";

export default function Add() {
  const [ingredient, setIngredient] = useState("");
  const { ingredients, setIngredients } = useFridge();

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const handleDeleteIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <section className="add">
      <h2>Ajouter un ingrédient</h2>
      <input
        className="ingredient-input"
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <br />
      <button
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
              onClick={() => handleDeleteIngredient(index)}
              style={{ marginLeft: 8 }}
            >
              <img src="pictos/croix.png" alt="Delete" className="Xicon" />
            </button>
          </li>
        ))}
      </ul>

      <NavLink to="/suggestions" className="primary-link ingredient-link">
        GO
      </NavLink>
      {/****************************barre de navigation******************************/}
      <div className="navbar">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src="pictos/house.svg" className="icon" alt="Home" />
        </NavLink>
        <NavLink
          to="/suggestions"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src="pictos/list.svg" className="icon" alt="Suggestion" />
        </NavLink>
        <NavLink
          to="/favoris"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src="pictos/book.svg" className="icon" alt="Favoris" />
        </NavLink>
      </div>
    </section>
  );
}
