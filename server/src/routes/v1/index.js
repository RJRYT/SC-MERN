import express from 'express';
import userRouter from './userRoute.js';

const v1Router = express.Router();

v1Router.use("/user",userRouter)

// v1Router.use("/admin",userRouter)


export default v1Router;