/**
 * PURPOSE: This is the main entry point for the backend server.
 * WHY WE CREATED IT: To start the Express application, configure middleware (CORS, JSON parsing),
 * and mount the API routes. In production, this file is also responsible for serving the built
 * frontend React application statically so we only need one Docker container.
 *
 * EXPECTED BEHAVIOR:
 * 1. Loads environment variables.
 * 2. Sets up middleware.
 * 3. Mounts /api routes.
 * 4. Serves static files from the client/dist directory.
 * 5. Listens on a specified port.
 */

import express from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "./routes/api";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

// In production, serve the React frontend built files
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientBuildPath));

  // Handle SPA routing by returning index.html for all unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
