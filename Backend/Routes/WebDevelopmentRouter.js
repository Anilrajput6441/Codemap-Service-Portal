import getwebdevelopment from "../Controllers/WebdevelopmentController/getwebdevlopment.js";
import postWebDevelopment from "../Controllers/WebdevelopmentController/postwebdevelopment.js";
import express from "express";

const webDevelopmentRouter = express.Router();
webDevelopmentRouter.get("/", getwebdevelopment);
webDevelopmentRouter.post("/", postWebDevelopment());

export { webDevelopmentRouter };