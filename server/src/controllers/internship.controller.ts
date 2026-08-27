import type { Request, Response } from "express";
import { readSeedData } from "../data/seedData";

export function getInternshipOverview(_req: Request, res: Response) {
  try {
    const data = readSeedData();
    res.json(data.internshipOverview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to read internship data" });
  }
}