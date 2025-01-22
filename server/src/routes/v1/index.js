import express from "express";
import userRouter from "./userRoute.js";
import authRoute from "./authRoute.js";

const v1Router = express.Router();

v1Router.use("/auth", authRoute);
v1Router.use("/user", userRouter);

export default v1Router;
