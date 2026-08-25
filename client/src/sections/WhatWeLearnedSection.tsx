/**
 * PURPOSE: Display the training sessions and topics learned.
 * WHY WE CREATED IT: To show the timeline of sessions and what technologies were covered.
 *
 * WHAT KIND OF DATA SHOULD BE DISPLAYED:
 * - A list of sessions (e.g., Session 1, Session 8) including dates, topics, and categories.
 * - You can present this as a vertical Timeline using MUI Timeline components.
 *
 * WHAT INFO/PROPS YOU NEED:
 * You should fetch the session data from the backend API (`/api/sessions`).
 *
 * EXPECTED BEHAVIOR:
 * When the component mounts, it should `fetch` data and render a chronologically ordered list or timeline.
 */

import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";

interface SessionData {
  id: number;
  name: string;
  date: string;
  category: string;
  topics: string[];
}

const WhatWeLearnedSection: React.FC = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/sessions`,
    )
      .then((res) => res.json())
      .then((data) => setSessions(data))
      .catch((err) => console.error("Failed to fetch sessions", err));
  }, []);

  return (
    <Box id="learned" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          02 / WHAT WE LEARNED
        </Typography>
        <Box>
          {/* TODO: Implement MUI Timeline here using the `sessions` state */}
          <Typography>
            Implement the Sessions Timeline here. ({sessions.length} sessions
            loaded)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeLearnedSection;
