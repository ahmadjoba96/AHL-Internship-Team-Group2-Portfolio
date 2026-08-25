/**
 * PURPOSE: Display the team member profiles.
 * WHY WE CREATED IT: To introduce Ahmad, Jana, Dina, and Ameed, including their roles, skills, and links.
 *
 * WHAT KIND OF DATA SHOULD BE DISPLAYED:
 * - Cards for each member containing name, role, bio, skill tags, and social links (GitHub/LinkedIn).
 *
 * WHAT INFO/PROPS YOU NEED:
 * You should fetch the team data from the backend API (`/api/team`).
 *
 * EXPECTED BEHAVIOR:
 * The data should be fetched and mapped to `TeamMemberCard` components (you can create that component
 * inside src/components/TeamMemberCard.tsx to keep things modular).
 */

import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github: string;
  linkedin: string;
  cv: string;
}

const TeamSection: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/team`)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Failed to fetch team", err));
  }, []);

  return (
    <Box id="team" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          04 / THE TEAM
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 4 }}>
          {/* TODO: Map through `team` array and render Member Cards */}
          {team.length > 0 ? (
            team.map((member) => (
              <Box
                key={member.id}
                sx={{
                  flex: "1 1 200px",
                  p: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography>Loading team...</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
