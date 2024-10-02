import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { DBConnectFunction } from "./Connection/DBConnectFunction.js";
import generalRouter from "./Routes/generalRouter.js";
import servicesRouter from "./Routes/servicesRouter.js";

dotenv.config();

//App Configuration
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

//DB Connection
DBConnectFunction(process.env.MONGODB_URI);

//Routes
app.use("/api/v1/", generalRouter);
app.use("/api/v1/services", servicesRouter);

//App Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
