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

const dataPath = path.join(__dirname, "seed-data.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const seedData = JSON.parse(rawData) as SeedData;

export function readSeedData(): SeedData {
  return seedData;
}