
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const HeroSection: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            maxWidth: 900,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <MotionTypography
            variant="overline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            sx={{
              display: "inline-block",
              mb: 2,
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            AHL LOGICS • INTERNSHIP JOURNEY
          </MotionTypography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.6rem",
                sm: "3.6rem",
                md: "5rem",
              },
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              mb: 3,
            }}
          >
            Four Developers.
            <Box component="span" sx={{ color: "primary.main" }}>
              {" "}
              One Journey.
            </Box>
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: "auto",
              mb: 5,
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            We are Group 2, a team of engineering interns who spent our AHL
            Logics internship learning, building, collaborating, and turning
            ideas into real software experiences.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="#project"
              sx={{
                minWidth: 190,
                px: 4,
                py: 1.4,
              }}
            >
              Explore Our Project
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#team"
              sx={{
                minWidth: 190,
                px: 4,
                py: 1.4,
              }}
            >
              Meet the Team
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 5 },
              justifyContent: "center",
              mt: 7,
            }}
          >
            {[
              ["4", "Team Members"],
              ["1", "Shared Project"],
              ["3", "Months of Internship"],
            ].map(([value, label]) => (
              <Box key={label}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                  }}
                >
                  {value}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HeroSection;

