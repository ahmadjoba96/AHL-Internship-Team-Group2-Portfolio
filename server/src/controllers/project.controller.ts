/**
 * controllers/project.controller.ts
 * ----------------------------------------------------------------------------
 * Returns the single shared Team Project from data/content.ts.
 */

import type { Request, Response } from "express";
import { teamProject } from "../data/content";

export function getTeamProject(_req: Request, res: Response) {
  res.json(teamProject);
}
