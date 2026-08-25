/**
 * controllers/internship.controller.ts
 * ----------------------------------------------------------------------------
 * Returns the internship overview (program info + milestones) from
 * data/content.ts.
 */

import type { Request, Response } from "express";
import { internshipOverview } from "../data/content";

export function getInternshipOverview(_req: Request, res: Response) {
  res.json(internshipOverview);
}
