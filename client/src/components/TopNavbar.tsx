import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";

import ThemeToggle from "./ThemeToggle";
import logoAhl from "../assets/logo-ahl.png";

const navItems = [
  { name: "Home", icon: <HomeIcon sx={{ fontSize: 20 }} />, link: "#hero" },
  {
    name: "Project",
    icon: <AssignmentIcon sx={{ fontSize: 20 }} />,
    link: "#project",
  },
  {
    name: "Learned",
    icon: <MenuBookIcon sx={{ fontSize: 20 }} />,
    link: "#learned",
  },
  {
    name: "Internship",
    icon: <WorkIcon sx={{ fontSize: 20 }} />,
    link: "#internship",
  },
  { name: "Team", icon: <GroupIcon sx={{ fontSize: 20 }} />, link: "#team" },
];

interface TopNavbarProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ mode, toggleTheme }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Box
        component={motion.div}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        sx={{
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          mx: "auto",
          width: "fit-content",
          maxWidth: "95vw",
          zIndex: 5000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            borderRadius: "999px",
            border: "1px solid",
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            bgcolor: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)",
            backdropFilter: "blur(16px)",
            px: 2,
            py: 1,
            boxShadow: theme.shadows[8],
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logoAhl}
            alt="AHL Logics Logo"
            sx={{
              height: 28,
              width: "auto",
              objectFit: "contain",
              // Add a dark drop shadow in light mode so the white "Logics" text is visible
              filter: isDark ? 'none' : 'drop-shadow(0px 0px 4px rgba(0,0,0,0.6))',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              display: { xs: 'none', md: 'block' },
              color: isDark ? 'white' : 'black',
              ml: 1,
            }}
          >
            Group 2 - <Box component="span" sx={{ color: 'primary.main' }}>Team</Box>
          </Typography>

          <Box
            sx={{
              width: "1px",
              height: 24,
              bgcolor: "divider",
              display: { xs: "none", sm: "block" },
              mx: 1,
            }}
          />

          {/* Nav Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {navItems.map((navItem, idx) => (
              <Box
                key={`link-${idx}`}
                component="a"
                href={navItem.link}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "999px",
                  px: 2,
                  py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isDark ? "text.primary" : "text.secondary",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.05)",
                    color: isDark ? "#fff" : "#000",
                  },
                }}
              >
                <Box component="span" sx={{ display: { sm: "none" } }}>
                  {navItem.icon}
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {navItem.name}
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ width: "1px", height: 24, bgcolor: "divider", mx: 1 }} />

          {/* Theme Toggle */}
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>
      </Box>
    </AnimatePresence>
  );
};

export default TopNavbar;
