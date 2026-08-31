import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

interface SessionData {
  id: number | string;
  name: string;
  date: string;
  category: string;
  topics: string[];
}

const WhatWeLearnedSection: React.FC = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/sessions`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch sessions");
        }
        return res.json();
      })
      .then((data) => {
        setSessions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sessions", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Box id="learned" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ fontWeight: 700, letterSpacing: 2 }}
        >
          02 / WHAT WE LEARNED
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
          Our Learning Journey
        </Typography>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error">
            Unable to load learning sessions.
          </Typography>
        )}

        {!loading && !error && sessions.length === 0 && (
          <Typography color="text.secondary">
            No sessions available yet.
          </Typography>
        )}

        <Grid container spacing={3}>
          {sessions.map((session, index) => (
            <Grid key={session.id} size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700 }}
                    >
                      {session.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      #{String(index + 1).padStart(2, "0")}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {session.date}
                  </Typography>

                  <Chip
                    label={session.category}
                    size="small"
                    sx={{ mb: 3 }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {session.topics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        variant="outlined"
                        size="small"
                      />
                    ))}
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

export default WhatWeLearnedSection;