import express from "express";
import technologiesGET from "../Controllers/TechnologiesController/technologiesGET.js";
import technologiesPOST from "../Controllers/TechnologiesController/technologiesPOST.js";
import technologiesDELETE from "../Controllers/TechnologiesController/technologiesDELETE.js";
import multer from "multer";
import fs from "fs";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const technologiesRouter = express.Router();

technologiesRouter.get("/", technologiesGET);

technologiesRouter.post("/", upload.single("file"), technologiesPOST());

technologiesRouter.delete("/:id", technologiesDELETE);

export default technologiesRouter;
