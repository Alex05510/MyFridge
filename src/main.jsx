import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ListeProvider } from "./context/ListeContext";
import { FridgeProvider } from "./context/FridgeContext";
import { FavorisProvider } from "./context/FavorisContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FridgeProvider>
      <ListeProvider>
        <FavorisProvider>
          <App />
        </FavorisProvider>
      </ListeProvider>
    </FridgeProvider>
  </StrictMode>
);
