import express from "express";
import queriesGET from "../Controllers/queriesController/queriesGET.js";
import queriesPOST from "../Controllers/queriesController/queriesPOST.js";

const queryRouter = express.Router();

queryRouter.get("/", queriesGET);

queryRouter.post("/", queriesPOST());

export default queryRouter;
