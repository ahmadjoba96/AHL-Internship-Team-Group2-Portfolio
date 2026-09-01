import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { sessions as sessionsData } from "../data/staticData";

const WhatWeLearnedSection: React.FC = () => {
  const sessions = sessionsData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDark = theme.palette.mode === "dark";

  return (
    <Box id="learned" sx={{ py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      {/* Background Glows for aesthetics */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background: isDark 
            ? "radial-gradient(circle, rgba(144, 202, 249, 0.08) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(25, 118, 210, 0.08) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: "30%",
          height: "30%",
          background: isDark
            ? "radial-gradient(circle, rgba(206, 147, 216, 0.08) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(156, 39, 176, 0.08) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{ fontWeight: 700, letterSpacing: 2, color: "primary.main" }}
          >
            02 / WHAT WE LEARNED
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              mb: 8,
              fontSize: { xs: "2.2rem", md: "4rem" },
              fontWeight: 800,
              background: isDark 
                ? "linear-gradient(90deg, #fff 0%, #aaa 100%)"
                : "linear-gradient(90deg, #111 0%, #666 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Internship Journey
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative" }}>
          {/* Central Line for Desktop, Left Line for Mobile */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "24px", md: "50%" },
              transform: { xs: "none", md: "translateX(-50%)" },
              top: 0,
              bottom: 0,
              width: "2px",
              background: isDark 
                ? "linear-gradient(180deg, rgba(144,202,249,0.8) 0%, rgba(206,147,216,0.3) 100%)"
                : "linear-gradient(180deg, rgba(25,118,210,0.8) 0%, rgba(156,39,176,0.3) 100%)",
              borderRadius: "2px",
            }}
          />

          {sessions.map((session, index) => {
            const isEven = index % 2 === 0;
            return (
              <Box
                key={session.id}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: isEven ? "flex-end" : "flex-start" },
                  alignItems: "center",
                  width: "100%",
                  mb: { xs: 4, md: 2 },
                  position: "relative",
                }}
              >
                {/* Dot */}
                <Box
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  sx={{
                    position: "absolute",
                    left: { xs: "24px", md: "50%" },
                    transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    bgcolor: "background.default",
                    border: "4px solid",
                    borderColor: "primary.main",
                    zIndex: 2,
                    boxShadow: isDark 
                      ? "0 0 10px rgba(144, 202, 249, 0.5)"
                      : "0 0 10px rgba(25, 118, 210, 0.3)",
                  }}
                />

                {/* Card Container */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: isMobile ? 50 : isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  sx={{
                    width: { xs: "calc(100% - 60px)", md: "45%" },
                    ml: { xs: "60px", md: 0 },
                    pr: { xs: 0, md: isEven ? "40px" : 0 },
                    pl: { xs: 0, md: isEven ? 0 : "40px" },
                  }}
                >
                  <Card
                    sx={{
                      background: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.6)",
                      backdropFilter: "blur(10px)",
                      border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
                      borderRadius: 4,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: isDark 
                          ? "0 10px 30px rgba(0,0,0,0.5)"
                          : "0 10px 30px rgba(0,0,0,0.08)",
                        borderColor: isDark 
                          ? "rgba(144,202,249,0.3)"
                          : "rgba(25,118,210,0.3)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "inline-block",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          bgcolor: isDark ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)",
                          color: isDark ? "primary.light" : "primary.main",
                          fontWeight: 700,
                          mb: 1.5,
                          letterSpacing: 1,
                        }}
                      >
                        {session.date.toUpperCase()}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                        {session.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeLearnedSection;