/**
 * components/common/SectionHeading.tsx
 * ----------------------------------------------------------------------------
 * Responsible for: the numbered "eyebrow" heading style seen in the
 * reference screenshots (e.g. "03 / INTERNSHIP" above "Internship"). Used
 * once near the top of every content page (Team Project, What We Learned,
 * Internship, Team, Contact) — NOT on Home, which uses <Hero /> instead.
 *
 * Why numbered: the pages themselves form a real sequence in the nav
 * (Home → Team Project → What We Learned → Internship → Team → Contact),
 * so the numbering carries real information, not just decoration.
 *
 * Props:
 *   - index: the page's position, e.g. 1 for Team Project, 2 for What We
 *     Learned, etc. (Home is not numbered.)
 *   - label: the section name shown next to the number, e.g. "THE TEAM"
 *   - title: the large page title shown below, e.g. "The Team"
 *   - description: one to two sentences of page-level intro copy
 */

import { Stack, Typography } from "@mui/material";

interface SectionHeadingProps {
  index: number;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="overline" color="secondary.main">
        {String(index).padStart(2, "0")} / {label.toUpperCase()}
      </Typography>
      <Typography variant="h2">{title}</Typography>
      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 640 }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}
