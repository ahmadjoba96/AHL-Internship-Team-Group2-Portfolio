/**
 * routes/internship.routes.ts
 * ----------------------------------------------------------------------------
 * GET /api/internship — program info + milestone timeline for the
 * Internship page.
 */

import { Router } from "express";
import { getInternshipOverview } from "../controllers/internship.controller";

export const internshipRouter = Router();

internshipRouter.get("/", getInternshipOverview);
