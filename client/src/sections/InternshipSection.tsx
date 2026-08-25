/**
 * PURPOSE: Overview of the internship milestones.
 * WHY WE CREATED IT: To give a high-level summary of the phases of the internship (e.g., Onboarding, First Shipped Feature).
 *
 * WHAT KIND OF DATA SHOULD BE DISPLAYED:
 * - Week ranges (Week 1-2, Week 3-6) and a short description.
 *
 * WHAT INFO/PROPS YOU NEED:
 * This can either be static content placed directly in this file, or you can add an endpoint for it.
 * Keeping it static is fine for simplicity if it doesn't change.
 */

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const InternshipSection: React.FC = () => {
  return (
    <Box id="internship" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          03 / INTERNSHIP
        </Typography>
        <Box>
          {/* TODO: Implement Milestone cards or list here */}
          <Typography>Implement the Internship milestones here.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default InternshipSection;
