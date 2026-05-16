import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { ThemeProvider } from "./contexts/ThemeContext";

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});


createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
