import express from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "./routes/api";
import { healthRouter } from "./routes/health.routes";
import { teamRouter } from "./routes/team.routes";
import { projectRouter } from "./routes/project.routes";
import { internshipRouter } from "./routes/internship.routes";
import { learningRouter } from "./routes/learning.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use("/api/v2/health", healthRouter);
app.use("/api/v2/team", teamRouter);
app.use("/api/v2/project", projectRouter);
app.use("/api/v2/internship", internshipRouter);
app.use("/api/v2/learning", learningRouter);

if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientBuildPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});