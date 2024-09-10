import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/contextProvider.jsx";
import DarkModeProvider from "./context/darkModeprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </DarkModeProvider>
  </StrictMode>
);
