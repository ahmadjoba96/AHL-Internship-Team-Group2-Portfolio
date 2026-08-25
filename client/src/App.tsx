/**
 * PURPOSE: The main Application layout and composition root.
 * WHY WE CREATED IT: To assemble all the sections of our Single Page Application.
 *
 * WHAT TO PUT HERE:
 * 1. ThemeProvider to handle Light/Dark mode state.
 * 2. The Navbar (fixed at the top).
 * 3. All the individual sections (Hero, Team, etc.) stacked vertically.
 * 4. The Footer.
 */

import { useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./theme/theme";
import Box from "@mui/material/Box";

// Import our sections (to be implemented)
import TopNavbar from "./components/TopNavbar";
import HeroSection from "./sections/HeroSection";
import TeamProjectSection from "./sections/TeamProjectSection";
import WhatWeLearnedSection from "./sections/WhatWeLearnedSection";
import InternshipSection from "./sections/InternshipSection";
import TeamSection from "./sections/TeamSection";
import Footer from "./components/Footer";
import DarkGradientBg from "./components/DarkGradientBg";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  // Memoize theme to avoid unnecessary recalculations
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <DarkGradientBg mode={mode}>
        {/* Box with background color tied to theme */}
        <Box
          sx={{
            bgcolor: mode === "dark" ? "transparent" : "background.default",
            color: "text.primary",
            minHeight: "100vh",
          }}
        >
          {/* Top navigation with logo, animated links, and theme toggle */}
          <TopNavbar mode={mode} toggleTheme={toggleTheme} />

          {/* Main Content Sections */}
          <main>
            <HeroSection />
            <TeamProjectSection />
            <WhatWeLearnedSection />
            <InternshipSection />
            <TeamSection />
          </main>

          <Footer />
        </Box>
      </DarkGradientBg>
    </ThemeProvider>
  );
}

export default App;
