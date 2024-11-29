import getandroid from "../Controllers/AndroidController/getandroid.js";
import express from "express";
import postAndroid from "../Controllers/AndroidController/postAndroid.js";

const androidRouter = express.Router();
androidRouter.get("/", getandroid);
androidRouter.post("/",postAndroid());

export { androidRouter };
