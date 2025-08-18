import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useFavoris } from "../context/FavorisContext";

export default function Favoris() {
  const { favoris } = useFavoris();
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Filtrer les recettes dont l'id est dans favoris (cohérence type)
        const favRecettes = data.filter((recette) =>
          favoris.includes(recette.id)
        );
        setRecettes(favRecettes);
      });
  }, [favoris]);

  return (
    <>
      <div className="nav">
        <NavLink to={"/suggestions"}>
          <img src="../pictos/Fleche.png" alt="Suggestions" />
        </NavLink>
        <h2>Mes recettes favorites</h2>
      </div>
      <div>
        {recettes.length === 0 ? (
          <p>Aucune recette en favoris.</p>
        ) : (
          <ul className="favoris-list suggestion-list">
            {/* Afficher la liste des recettes favorites */}
            {recettes.map((recette) => (
              <li key={recette.id} className="card-favoris card-suggestion">
                <img src={recette.image} alt={recette.nom} width={100} />
                <h3>{recette.nom}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
