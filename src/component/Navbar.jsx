import { NavLink } from "react-router";
import { useFavoris } from "../context/FavorisContext";
function Navbar() {
  const { favoris } = useFavoris();

  return (
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
        <div className="favoris-logo-container">
          <img src="pictos/book.svg" className="icon" alt="Favoris" />
          {favoris && favoris.length > 0 && (
            <span className="favoris-count">{favoris.length}</span>
          )}
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;
