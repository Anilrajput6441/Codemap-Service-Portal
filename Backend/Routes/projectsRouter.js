import express from "express";
import projectsGET from "../Controllers/ProjectsController/projectsGET.js";
import projectsPOST from "../Controllers/ProjectsController/projectsPOST.js";
import projectsPATCH from "../Controllers/ProjectsController/projectsPATCH.js";
import projectsDelete from "../Controllers/ProjectsController/projectsDelete.js";
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
const projectsRouter = express.Router();

projectsRouter.get("/", projectsGET);
projectsRouter.post("/", upload.single("file"), projectsPOST());
projectsRouter.patch("/", projectsPATCH());
projectsRouter.delete("/:id", projectsDelete);

export default projectsRouter;
