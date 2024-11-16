import express from "express";
import postCareer from "../Controllers/CareerController/postCareer.js";
import getCareer from "../Controllers/CareerController/getCareer.js";

const careerRouter = express.Router();

careerRouter.get("/", getCareer);
careerRouter.post("/", postCareer());

export default careerRouter;
