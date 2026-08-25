/**
 * routes/project.routes.ts
 * ----------------------------------------------------------------------------
 * GET /api/project — the single shared Team Project.
 * (Singular "project" since there's currently only one — if "Individual
 * Work" per-person projects get confirmed, this likely becomes
 * GET /api/projects returning an array instead. Revisit once that's
 * decided — see the open question in the blueprint.)
 */

import { Router } from "express";
import { getTeamProject } from "../controllers/project.controller";

export const projectRouter = Router();

projectRouter.get("/", getTeamProject);
