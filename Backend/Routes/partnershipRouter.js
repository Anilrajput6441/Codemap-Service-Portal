import express from "express";
import getpartnership from "../Controllers/PartnershipController/getpartnership.js";
import postPartnership from "../Controllers/PartnershipController/postpartnership.js";

const partnershipRouter = express.Router();

partnershipRouter.get("/", getpartnership);
partnershipRouter.post("/", postPartnership());

export default partnershipRouter;
