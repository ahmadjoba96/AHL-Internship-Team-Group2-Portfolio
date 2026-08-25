/**
 * middleware/errorHandler.ts
 * ----------------------------------------------------------------------------
 * Express error-handling middleware — catches anything thrown/passed to
 * next(err) in a route/controller and returns a consistent JSON error
 * shape instead of Express's default HTML error page.
 *
 * Register this LAST in index.ts, after all routes are mounted (Express
 * requires error-handling middleware to be added after the routes it's
 * meant to catch errors from).
 */

import type { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
