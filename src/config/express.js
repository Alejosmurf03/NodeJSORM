import userRouter from "#Routes/user.routes.js";
import express from "express";

const expressApp=express();

expressApp.use(express.json())
expressApp.use("/user", userRouter)

export default expressApp;