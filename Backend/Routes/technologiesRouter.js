import express from "express";

const technologiesRouter = express.Router();

technologiesRouter.get("/", (req, res) => {
  res.send("Technologies Route");
});

technologiesRouter.post("/api", function () {});

technologiesRouter.patch("/api", function (req, res) {});

technologiesRouter.delete("/api", function (req, res) {});

export default technologiesRouter;
