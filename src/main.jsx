import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ListeProvider } from "./context/ListeContext";
import { FridgeProvider } from "./context/FridgeContext";

createRoot(document.getElementById("root")).render(
  <FridgeProvider>
    <StrictMode>
      <FridgeProvider>
        <ListeProvider>
          <App />
        </ListeProvider>
      </FridgeProvider>
    </StrictMode>
  </FridgeProvider>
);
