import { useParams } from "react-router";
import { NavLink } from "react-router";
import { useListe } from "../context/ListeContext";

export default function Recette() {
  const { recettes } = useListe();
  const { id } = useParams();

  const recette = recettes.find((r) => r.id === parseInt(id));

  return (
    <div>
      <div className="nav">
        <NavLink to={"/suggestions"}>
          <img src="../pictos/Fleche.png" alt="Suggestions" />
        </NavLink>
        <h2>{recette.nom}</h2>
      </div>
      <div className="banner">
        <div className="suggestion-img">
          <img src={recette.image} alt={recette.nom} className="img-recette" />
        </div>
        <div className="preparation">
          <p className="details">
            <img
              src="../pictos/clock.png"
              alt="picto temps de préparation"
              width={16}
              height={16}
            />
            {recette.temps_preparation}
          </p>
          <p className="details">
            <img
              src="../pictos/user.png"
              alt="picto user"
              width={16}
              height={16}
            />
            {recette.nombre_personnes} personnes
          </p>
          <p className="details">
            <img
              src="../pictos/loader.png"
              alt="picto temps de cuisson"
              width={16}
              height={16}
            />
            {recette.temps_cuisson}
          </p>
          <div className="favoris">
            <img
              src="../pictos/favoris.svg"
              alt="Favoris"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="etapes-preparation">
        <div className="etapes-ingredients">
          <h3>Ingrédients</h3>
          <p className="list-ingr">
            {recette.ingredients.map((ingredient) => (
              <span key={ingredient.id}>
                {ingredient.illustration}
                {ingredient.quantite}
                {ingredient.unite}
                {ingredient.nom}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="etapes">
          <h3>Etapes</h3>
          <p>
            {recette.etapes.map((etape, index) => (
              <span key={index}>{etape}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
