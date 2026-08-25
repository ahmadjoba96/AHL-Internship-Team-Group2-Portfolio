/**
 * data/content.ts
 * ----------------------------------------------------------------------------
 * The entire "database" for this project, now that we've decided not to use
 * a real one. This file holds the real content in-memory, typed against
 * server/src/types/index.ts, and each route module simply imports and
 * returns slices of it.
 *
 * Whoever owns content: edit the arrays below directly once the real data
 * is confirmed (see the Notion blueprint §9 checklist, and
 * client/src/data/collected-content-draft.ts for content already
 * partially collected but not yet migrated here).
 *
 * Why a .ts file and not a .json file: keeping it as typed TypeScript means
 * a typo or missing field is caught at build time instead of silently
 * breaking a page at runtime.
 */

import type {
  TeamMember,
  TeamProject,
  TrainingSession,
  InternshipOverview,
  TechTag,
} from "../types";

export const teamMembers: TeamMember[] = [
  // TODO: replace with the four real team members.
];

export const techTags: TechTag[] = [
  // TODO: replace with the real, categorized list of technologies/tools/
  // methodologies used during the internship.
];

export const trainingSessions: TrainingSession[] = [
  // TODO: replace with the real training sessions (see collected-content-draft.ts
  // on the frontend for anything already gathered).
];

export const teamProject: TeamProject = {
  id: "placeholder",
  name: "TODO: real project name",
  description: "TODO: real project description",
  techStack: [],
  githubUrl: "",
  memberIds: [],
};

export const internshipOverview: InternshipOverview = {
  programName: "TODO",
  startDate: "",
  endDate: "",
  milestones: [
    // TODO: real milestones (e.g. Week 1-2 / Week 3-6 / Week 7+)
  ],
};
