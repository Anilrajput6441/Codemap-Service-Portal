import express from "express";
import postRegister from "../Controllers/authController/postRegister.js";
import postLogin from "../Controllers/authController/postLogin.js";
import postAuth from "../Controllers/authController/postAuth.js";

const authenticationRouter = express.Router();

authenticationRouter.post("/register", postRegister());
authenticationRouter.post("/login", postLogin());
authenticationRouter.post("/auth", postAuth());

export default authenticationRouter;
