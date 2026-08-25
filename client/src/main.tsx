/**
 * PURPOSE: The React entry point.
 * WHY WE CREATED IT: This is standard for Vite/React apps. It injects the App into the DOM.
 *
 * EXPECTED BEHAVIOR:
 * It should remain clean. Any global providers (like ThemeProvider) should ideally go here
 * or at the top of App.tsx.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// We import a minimal reset to ensure consistent cross-browser baseline
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
);
