import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import Suggestions from "./pages/Suggestions.jsx";
import Recette from "./pages/Recette.jsx";

function App() {
  return (
    <div className="main-container" style={{ border: "1px solid black" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/recette/:id" element={<Recette />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
