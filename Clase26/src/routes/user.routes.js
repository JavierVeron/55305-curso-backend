import express from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.addUser);

export default userRouter;