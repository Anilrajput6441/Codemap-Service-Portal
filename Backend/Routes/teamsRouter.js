import express from "express";

const teamsRouter = express.Router();

teamsRouter.get("/", (req, res) => {
  res.send("Teams Route");
});

teamsRouter.post("/api", function () {});

export default teamsRouter;
