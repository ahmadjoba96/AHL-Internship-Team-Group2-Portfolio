/**
 * routes/learning.routes.ts
 * ----------------------------------------------------------------------------
 * GET /api/learning — all training sessions, for the What We Learned page's
 * timeline. Sorting (by date) can happen here on the backend, or on the
 * frontend after fetching — pick one and note it in the controller's
 * comment so it isn't done in both places.
 */

import { Router } from "express";
import { getAllTrainingSessions } from "../controllers/learning.controller";

export const learningRouter = Router();

learningRouter.get("/", getAllTrainingSessions);
