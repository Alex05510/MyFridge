import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import Suggestions from "./pages/Suggestions.jsx";
import Recette from "./pages/Recette.jsx";
import Favoris from "./pages/Favoris.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbarOnHome = location.pathname === "/";
  const hideNavbarOnRecette = location.pathname.startsWith("/recette/");
  return (
    <div className="main-container" style={{ border: "1px solid black" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/recette/:id" element={<Recette />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
      {!hideNavbarOnHome && !hideNavbarOnRecette && <Navbar />}
    </div>
  );
}

export default App;
