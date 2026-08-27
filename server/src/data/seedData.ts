import fs from "fs";
import path from "path";
import type {
  TeamMember,
  TechTag,
  TrainingSession,
  TeamProject,
  InternshipOverview,
} from "../types";

export interface SeedData {
  teamMembers: TeamMember[];
  techTags: TechTag[];
  trainingSessions: TrainingSession[];
  teamProject: TeamProject;
  internshipOverview: InternshipOverview;
}

export function readSeedData(): SeedData {
  const dataPath = path.join(__dirname, "seed-data.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(rawData) as SeedData;
}