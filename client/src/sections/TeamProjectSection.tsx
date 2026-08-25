/**
 * PURPOSE: Showcase the shared team project.
 * WHY WE CREATED IT: To highlight the main collaborative project the team built at AHL Logics.
 *
 * WHAT KIND OF DATA SHOULD BE DISPLAYED:
 * - Project Name, Description, and Tech Stack tags.
 * - Links to GitHub repository and Live Demo (if available).
 *
 * WHAT INFO/PROPS YOU NEED:
 * You should fetch the project data from the backend API (`/api/projects`).
 * Expect an array of projects (even if it's just one for now).
 *
 * EXPECTED BEHAVIOR:
 * When the component mounts, it should `fetch` data and store it in state, then render
 * a polished Card or presentation area for the project.
 */

import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

const TeamProjectSection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    // Example fetch logic you will expand
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/projects`,
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box id="project" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          01 / TEAM PROJECT
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box>
            {/* TODO: Map through projects and create a nice UI layout here */}
            <Typography>
              Implement the Project Card here using MUI components. (
              {projects.length} project loaded)
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TeamProjectSection;
