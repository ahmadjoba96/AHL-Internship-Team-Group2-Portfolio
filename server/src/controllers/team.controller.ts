/**
 * controllers/team.controller.ts
 * ----------------------------------------------------------------------------
 * Handles the actual request/response for team-related routes. With no
 * database, these mostly just return slices of data/content.ts — this is
 * still worth keeping as a separate controller layer (rather than inlining
 * in routes/team.routes.ts) so error handling and any future logic (e.g.
 * filtering) have an obvious home.
 */

import type { Request, Response } from "express";
import { teamMembers } from "../data/content";

export function getAllTeamMembers(_req: Request, res: Response) {
  res.json(teamMembers);
}

// TODO (optional, only if member detail pages get added):
// export function getTeamMemberById(req: Request, res: Response) { ... }
