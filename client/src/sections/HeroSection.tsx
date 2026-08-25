/**
 * PURPOSE: The Hero/Landing section of the portfolio.
 * WHY WE CREATED IT: This is the very first thing visitors see. It should be visually striking,
 * containing a strong headline ("Four Developers. One Journey.") and a brief intro.
 *
 * WHAT KIND OF DATA SHOULD BE DISPLAYED:
 * - A bold, large typography headline.
 * - 2-3 sentences introducing the Group 2 interns.
 * - Call to Action (CTA) buttons linking to the Team Project and Team sections below.
 * - (Optional) A quick "stats strip" showing "4 Team Members", "3 Months", etc.
 *
 * WHAT INFO/PROPS YOU NEED:
 * Currently, this can be static text. You do not need to fetch data for this section.
 */

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box id="hero" sx={{ pt: 12, pb: 8, textAlign: "center" }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="primary.main"
        >
          Four Developers. One Journey.
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          We are Group 2: Four engineering interns who spent our time at AHL
          Logics building real-world software together.
        </Typography>
        <Box sx={{ mt: 4, gap: 2, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="large" href="#project">
            See our team project
          </Button>
          <Button variant="outlined" size="large" href="#team">
            Meet the team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
