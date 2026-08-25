/**
 * PURPOSE: Define the Material UI (MUI) custom theme.
 * WHY WE CREATED IT: To ensure consistent styling across the entire application without
 * relying on one-off CSS or inline styles. We are using an "Amber & Slate" distinctive theme.
 *
 * WHAT TO PUT HERE:
 * Any global color definitions, typography rules, or component default overrides.
 */

import { createTheme } from "@mui/material/styles";

// You can add more complex logic here to toggle dark/light mode dynamically
export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#f59e0b", // Amber
        dark: "#d97706",
        light: "#fcd34d",
      },
      secondary: {
        main: "#475569", // Slate
      },
      background: {
        default: mode === "dark" ? "#0f172a" : "#f8fafc",
        paper: mode === "dark" ? "#1e293b" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#f1f5f9" : "#0f172a",
        secondary: mode === "dark" ? "#94a3b8" : "#475569",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            backgroundImage: "none", // Remove default MUI dark mode elevation gradient
          },
        },
      },
    },
  });
