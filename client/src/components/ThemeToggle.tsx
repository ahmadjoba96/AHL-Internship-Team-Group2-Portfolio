import React from "react";
import { Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

interface ThemeToggleProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, toggleTheme }) => {
  const isDark = mode === "dark";

  return (
    <Box
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      sx={{
        display: "flex",
        width: 64,
        height: 32,
        p: "4px",
        borderRadius: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        bgcolor: isDark ? "#09090b" : "#ffffff", // zinc-950 : white
        border: "1px solid",
        borderColor: isDark ? "#27272a" : "#e4e4e7", // zinc-800 : zinc-200
        position: "relative",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Sliding thumb */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            height: 24,
            borderRadius: "50%",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            transform: isDark ? "translateX(0px)" : "translateX(30px)",
            bgcolor: isDark ? "#27272a" : "#e5e7eb", // zinc-800 : gray-200
            zIndex: -1,
          }}
        />

        {/* Icons */}
        <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
          <DarkModeIcon
            sx={{
              fontSize: 16,
              color: isDark ? "#ffffff" : "#6b7280",
              opacity: isDark ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </Box>
        <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
          <WbSunnyIcon
            sx={{
              fontSize: 16,
              color: isDark ? "#6b7280" : "#374151",
              opacity: isDark ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeToggle;
