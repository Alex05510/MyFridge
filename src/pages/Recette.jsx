import { useParams, NavLink } from "react-router";
import { useListe } from "../context/ListeContext";
import { useFavoris } from "../context/FavorisContext";

export default function Recette() {
  const { recettes } = useListe();
  const { id } = useParams();
  const { isFavori, addFavori, removeFavori } = useFavoris();

  const recette = recettes.find((r) => r.id === parseInt(id));
  const favori = isFavori(recette.id);

  // Gestion du clic sur le picto favoris
  const handleFavoriClick = () => {
    if (favori) {
      removeFavori(recette.id);
    } else {
      addFavori(recette.id);
    }
  };

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
              src={
                // change l'icon d'ajout au favoris si deja ajouter ou non
                favori ? "../pictos/add-favoris.svg" : "../pictos/favoris.svg"
              }
              alt={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={handleFavoriClick}
            />
            Ajouter aux favoris
          </div>
        </div>
      </div>
      <div className="etapes-preparation">
        <div className="etapes-ingredients">
          <h3>Ingrédients</h3>
          <p className="list-ingr">
            {/* Afficher la liste des ingrédients */}
            {recette.ingredients.map((ingredient, idx) => (
              <span key={idx}>
                {ingredient.illustration}&nbsp;
                {ingredient.quantite}&nbsp;
                {ingredient.unite}&nbsp;
                {ingredient.nom}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="etapes">
          <h3>Etapes</h3>
          <p>
            {/* Afficher la liste des étapes */}
            {recette.etapes.map((etape, index) => (
              <span key={index}>{etape}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
