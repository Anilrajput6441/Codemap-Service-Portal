import getandroid from "../Controllers/AndroidController/getandroid.js";
import express from "express";

const androidRouter = express.Router();
androidRouter.get("/", getandroid);

export { androidRouter };
