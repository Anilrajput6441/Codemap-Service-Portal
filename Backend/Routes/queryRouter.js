import express from "express";
import queriesGET from "../Controllers/queriesGET.js";
import queriesPOST from "../Controllers/queriesPOST.js";

const queryRouter = express.Router();

queryRouter.get("/", queriesGET);

queryRouter.post("/", queriesPOST());

export default queryRouter;
