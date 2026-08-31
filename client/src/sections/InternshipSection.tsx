import React from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const milestones = [
  {
    period: "WEEK 01–02",
    title: "Onboarding & Foundations",
    description:
      "We started by understanding the development workflow, team structure, Git and GitHub collaboration, and the foundations of modern web development.",
  },
  {
    period: "WEEK 03–04",
    title: "Frontend Development",
    description:
      "We worked with React, TypeScript, component-based development, responsive interfaces, and modern UI practices.",
  },
  {
    period: "WEEK 05–06",
    title: "Backend & APIs",
    description:
      "We explored Node.js, Express, REST APIs, data handling, and connecting frontend applications with backend services.",
  },
  {
    period: "WEEK 07+",
    title: "Docker & CI/CD",
    description:
      "We learned how to containerize applications, automate workflows with GitHub Actions, and prepare applications for deployment.",
  },
];

const InternshipSection: React.FC = () => {
  return (
    <Box
      id="internship"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ fontWeight: 700, letterSpacing: 2 }}
        >
          03 / INTERNSHIP
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 6,
            fontSize: { xs: "2.2rem", md: "4rem" },
            fontWeight: 700,
          }}
        >
          Our Internship Journey
        </Typography>

        <Stack spacing={0}>
          {milestones.map((milestone, index) => (
            <React.Fragment key={milestone.period}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "180px 1fr",
                  },
                  gap: { xs: 2, md: 5 },
                  py: 4,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1.5,
                  }}
                >
                  {milestone.period}
                </Typography>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 1.5 }}
                  >
                    {milestone.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      maxWidth: 800,
                    }}
                  >
                    {milestone.description}
                  </Typography>
                </Box>
              </Box>

              {index < milestones.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default InternshipSection;