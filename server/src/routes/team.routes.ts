/**
 * routes/team.routes.ts
 * ----------------------------------------------------------------------------
 * GET /api/team       — list all team members
 * GET /api/team/:id    — one team member (used if we ever build member
 *                        detail pages — not in the current blueprint, so
 *                        this second route is optional/TODO)
 *
 * Delegates to team.controller.ts — this file should stay thin (just wiring
 * paths to controller functions), not contain logic itself.
 */

import { Router } from "express";
import { getAllTeamMembers } from "../controllers/team.controller";

export const teamRouter = Router();

teamRouter.get("/", getAllTeamMembers);

// TODO (optional): teamRouter.get('/:id', getTeamMemberById);
