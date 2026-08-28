import type { Request, Response, NextFunction } from "express";
import { readSeedData } from "../data/seedData";

export function getInternshipOverview(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = readSeedData();
    res.json(data.internshipOverview);
  } catch (error) {
    next(error);
  }
}