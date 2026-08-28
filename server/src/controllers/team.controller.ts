import type { Request, Response, NextFunction } from "express";
import { readSeedData } from "../data/seedData";

export function getAllTeamMembers(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = readSeedData();
    res.json(data.teamMembers);
  } catch (error) {
    next(error);
  }
}
