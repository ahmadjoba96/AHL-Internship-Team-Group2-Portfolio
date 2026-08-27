import type { Request, Response } from "express";
import { readSeedData } from "../data/seedData";

export function getAllTrainingSessions(_req: Request, res: Response) {
  try {
    const data = readSeedData();
    const sorted = [...data.trainingSessions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    res.json(sorted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to read training session data" });
  }
}