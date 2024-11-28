import express from "express";
import getpartnership from "../Controllers/PartnershipController/getpartnership.js";

const partnershipRouter = express.Router();

partnershipRouter.get("/", getpartnership);

// partnershipRouter.post("/", queriesPOST());

export default partnershipRouter;
