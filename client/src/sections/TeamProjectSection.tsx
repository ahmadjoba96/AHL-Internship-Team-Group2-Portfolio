import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ProjectData {
  id: number | string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const TeamProjectSection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/projects`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Box id="project" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ fontWeight: 700, letterSpacing: 2 }}
        >
          01 / TEAM PROJECT
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 5,
            fontSize: { xs: "2.2rem", md: "4rem" },
            fontWeight: 700,
          }}
        >
          What We Built
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error">
            Unable to load project information.
          </Typography>
        )}

        {!loading && !error && projects.length === 0 && (
          <Typography color="text.secondary">
            No projects available yet.
          </Typography>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  {project.name}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    maxWidth: 850,
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  {project.description}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                >
                  TECH STACK
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 4,
                  }}
                >
                  {project.techStack.map((tech) => (
                    <Chip key={tech} label={tech} variant="outlined" />
                  ))}
                </Box>

                <Stack direction="row" spacing={2}>
                  {project.githubUrl && (
                    <Button
                      component={Link}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      component={Link}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      endIcon={<OpenInNewIcon />}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamProjectSection;