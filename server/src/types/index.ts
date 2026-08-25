/**
 * types/index.ts (server)
 * ----------------------------------------------------------------------------
 * Mirrors client/src/types/index.ts — these are the shapes each /api/*
 * route returns. Keep the two files in sync manually for now (no shared
 * package at this project's scale); if a field is added on one side, add it
 * on the other in the same PR.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photoUrl?: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
}

export interface TechTag {
  name: string;
  category: "frontend" | "backend" | "devops" | "methodology" | "tool";
}

export interface TrainingSession {
  id: string;
  name: string;
  date: string;
  category: "frontend" | "backend" | "devops" | "general";
  topics: string[];
  whatWeLearned: string;
  mentor?: string;
  resourceLinks?: { label: string; url: string }[];
}

export interface TeamProject {
  id: string;
  name: string;
  description: string;
  ourContribution?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  screenshotUrls?: string[];
  memberIds: string[];
}

export interface InternshipMilestone {
  id: string;
  periodLabel: string;
  title: string;
  description: string;
}

export interface InternshipOverview {
  programName: string;
  startDate: string;
  endDate: string;
  milestones: InternshipMilestone[];
}
