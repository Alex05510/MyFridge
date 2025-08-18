import { NavLink } from "react-router";
import { useListe } from "../context/ListeContext";

export default function Suggestions() {
  const { recettes } = useListe();

  return (
    <div>
      <div className="nav">
        <NavLink to={"/add"}>
          <img src="pictos/Fleche.png" alt="Suggestions" />
        </NavLink>
        <h2>Recettes proposées</h2>
      </div>
      {recettes.length === 0 ? (
        <p>Aucune recette trouvée avec les ingrédients du frigo.</p>
      ) : (
        <ul className="suggestion-list">
          {recettes.map((recette) => (
            <li key={recette.id} className="card-suggestion">
              <NavLink to={`/recette/${recette.id}`}>
                <img src={recette.image} alt={recette.nom} width={100} />
                <h3>{recette.nom}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
