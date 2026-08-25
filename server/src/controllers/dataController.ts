/**
 * PURPOSE: Controller for handling data requests.
 * WHY WE CREATED IT: To keep the route definitions clean. This file contains the actual logic
 * for reading from our mock database (seed-data.json) and sending the response.
 *
 * EXPECTED BEHAVIOR:
 * Functions exported from here read the JSON data and send it back to the client.
 */

import { Request, Response } from "express";
import fs from "fs";
import path from "path";

// Helper function to read the mock database file
const readData = () => {
  const dataPath = path.join(__dirname, "../data/seed-data.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(rawData);
};

export const getTeam = (req: Request, res: Response) => {
  try {
    const data = readData();
    res.json(data.team);
  } catch (error) {
    res.status(500).json({ message: "Error reading team data" });
  }
};

export const getProjects = (req: Request, res: Response) => {
  try {
    const data = readData();
    res.json(data.projects);
  } catch (error) {
    res.status(500).json({ message: "Error reading project data" });
  }
};

export const getSessions = (req: Request, res: Response) => {
  try {
    const data = readData();
    res.json(data.sessions);
  } catch (error) {
    res.status(500).json({ message: "Error reading session data" });
  }
};
