/**
 * routes/health.routes.ts
 * ----------------------------------------------------------------------------
 * GET /api/health — used by: (1) Docker's HEALTHCHECK once the Dockerfile
 * is written, and (2) CI, to confirm the container actually started before
 * the pipeline calls the deployment "successful."
 *
 * This one's simple enough to be fully implemented now rather than left as
 * a stub — every other route depends on the server booting correctly, so
 * it's worth having this working from day one.
 */

import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({ status: "ok" });
});
