import React from "react";
import { teamMembers } from "../data/staticData";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  cv?: string;
}

const TeamSection: React.FC = () => {
  const team = teamMembers;
  const loading = false;
  const error = false;

  // Removed API call, using static data directly

  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ fontWeight: 700, letterSpacing: 2 }}
        >
          04 / THE TEAM
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
          Meet The Team
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error">
            Unable to load team members.
          </Typography>
        )}

        {!loading && !error && team.length === 0 && (
          <Typography color="text.secondary">
            No team members available yet.
          </Typography>
        )}

        <Grid container spacing={3}>
          {team.map((member) => (
            <Grid key={member.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      mb: 2,
                      fontSize: "1.5rem",
                    }}
                  >
                    {member.name.charAt(0)}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {member.role}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
                    {member.bio}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {member.skills?.map((skill) => (
                      <Typography
                        key={skill}
                        variant="caption"
                        sx={{
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mt: "auto",
                    }}
                  >
                    {member.github && (
                      <Button
                        component={Link}
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<GitHubIcon />}
                      >
                        GitHub
                      </Button>
                    )}

                    {member.linkedin && (
                      <Button
                        component={Link}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<LinkedInIcon />}
                      >
                        LinkedIn
                      </Button>
                    )}

                    {member.cv && (
                      <Button
                        component={Link}
                        href={member.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        startIcon={<DescriptionIcon />}
                      >
                        CV
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;