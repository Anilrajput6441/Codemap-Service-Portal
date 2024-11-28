import express from "express";
import getcustomsoftware from "../Controllers/CustomsoftwareController/getcustomsoftware.js";

const customsoftwareRouter = express.Router();

customsoftwareRouter.get("/", getcustomsoftware);

export { customsoftwareRouter };
