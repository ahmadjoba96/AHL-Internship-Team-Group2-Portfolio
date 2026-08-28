import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          mt: 8,
          py: { xs: 6, md: 7 },
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              letterSpacing: "-0.02em",
            }}
          >
            Built together. Learned together.{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Grew together.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 550,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            A shared journey by AHL Logics Group 2.
          </Typography>

          <Box
            sx={{
              width: 45,
              height: 3,
              bgcolor: "primary.main",
              borderRadius: 10,
              mx: "auto",
              my: 4,
            }}
          />

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} AHL Logics Group 2
          </Typography>
        </Container>
      </Box>
    </motion.footer>
  );
};

export default Footer;