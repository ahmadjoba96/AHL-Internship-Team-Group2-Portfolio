import type { Request, Response, NextFunction } from "express";
import { readSeedData } from "../data/seedData";

export function getAllTrainingSessions(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = readSeedData();
    const sorted = [...data.trainingSessions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    res.json(sorted);
  } catch (error) {
    next(error);
  }
}