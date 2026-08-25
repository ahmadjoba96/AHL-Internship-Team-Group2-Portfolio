/**
 * PURPOSE: The global Footer.
 * WHY WE CREATED IT: To provide a consistent bottom section with copyright and global links.
 *
 * WHAT TO PUT HERE:
 * - Copyright text (e.g., "© 2026 AHL Logics Group 2").
 * - Contact links or general company links.
 */

import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          {new Date().getFullYear()} AHL Logics Group 2 Portfolio.{" "}
          <Link color="inherit" href="https://ahllogics.com/" target="_blank">
            ahllogics.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
