import express from "express";
import servicesGET from "../Controllers/servicesGET.js";
import servicesPOST from "../Controllers/servicesPOST.js";
import servicesDELETE from "../Controllers/servicesDELETE.js";
import servicesPATCH from "../Controllers/servicesPATCH.js";

const servicesRouter = express.Router();
servicesRouter.get("/", servicesGET);

servicesRouter.post("/", servicesPOST());

servicesRouter.patch("/", servicesPATCH());

servicesRouter.delete("/:id", servicesDELETE);

export default servicesRouter;
