import express from "express";
import teamsGET from "../Controllers/teamsController/teamsGET.js";
import teamsPOST from "../Controllers/teamsController/teamsPOST.js";
import teamsPATCH from "../Controllers/teamsController/teamsPATCH.js";
import teamsDELETE from "../Controllers/teamsController/teamsDELETE.js";
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
const teamsRouter = express.Router();

teamsRouter.get("/", teamsGET);
teamsRouter.post("/", upload.single("file"), teamsPOST());
teamsRouter.patch("/", upload.single("file"), teamsPATCH());
teamsRouter.delete("/:id", teamsDELETE);

export default teamsRouter;
