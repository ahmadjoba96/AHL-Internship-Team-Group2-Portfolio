import type { Request, Response, NextFunction } from "express";
import { readSeedData } from "../data/seedData";

export function getTeamProject(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = readSeedData();
    res.json(data.teamProject);
  } catch (error) {
    next(error);
  }
}