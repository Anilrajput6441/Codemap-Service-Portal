import express from "express";
import getcustomsoftware from "../Controllers/CustomsoftwareController/getcustomsoftware.js";
import postCustomSoftware from "../Controllers/CustomsoftwareController/postCustomSoftware.js";

const customsoftwareRouter = express.Router();

customsoftwareRouter.get("/", getcustomsoftware);
customsoftwareRouter.post("/",postCustomSoftware()) ;

export { customsoftwareRouter };
