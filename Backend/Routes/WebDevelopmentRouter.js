import webdevelopmentDelete from "../Controllers/WebdevelopmentController/deleteWebDevelopment.js";
import getwebdevelopment from "../Controllers/WebdevelopmentController/getwebdevlopment.js";
import webdevelopmentPATCH from "../Controllers/WebdevelopmentController/patchWebDevelopment.js";
import postWebDevelopment from "../Controllers/WebdevelopmentController/postwebdevelopment.js";
import { getwebdevelopmentQuery } from "../Controllers/WebdevelopmentController/getwebdevlopment.js";
import express from "express";

const webDevelopmentRouter = express.Router();
webDevelopmentRouter.get("/", getwebdevelopment);
// below line is the get function with query parameter
webDevelopmentRouter.get("/:id", getwebdevelopmentQuery);
webDevelopmentRouter.post("/", postWebDevelopment());
webDevelopmentRouter.patch("/", webdevelopmentPATCH());
webDevelopmentRouter.delete("/:id", webdevelopmentDelete);


export { webDevelopmentRouter };