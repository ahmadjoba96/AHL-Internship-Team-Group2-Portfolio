/**
 * PURPOSE: API Router
 * WHY WE CREATED IT: To group and organize all backend API endpoints in one place.
 *
 * WHAT TO PUT HERE:
 * Define all the endpoints (e.g., /api/team, /api/projects, /api/sessions)
 * and connect them to the appropriate functions in dataController.ts.
 */

import { Router } from "express";
import {
  getTeam,
  getProjects,
  getSessions,
} from "../controllers/dataController";

const router = Router();

// Define API routes and map them to controller functions
router.get("/team", getTeam);
router.get("/projects", getProjects);
router.get("/sessions", getSessions);

export default router;
