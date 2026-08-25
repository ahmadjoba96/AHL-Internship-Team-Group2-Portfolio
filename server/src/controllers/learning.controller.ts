/**
 * controllers/learning.controller.ts
 * ----------------------------------------------------------------------------
 * Returns all training sessions from data/content.ts.
 *
 * TODO: decide here (and note the decision in the route file's comment)
 * whether sorting by date happens on this side or on the frontend.
 */

import type { Request, Response } from "express";
import { trainingSessions } from "../data/content";

export function getAllTrainingSessions(_req: Request, res: Response) {
  res.json(trainingSessions);
}
