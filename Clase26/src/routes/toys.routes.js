import express from "express";
import ToysController from "../controllers/toys.controller.js";

const toysRouter = express.Router();
const toysController = new ToysController();

toysRouter.get("/", toysController.getToys);
toysRouter.post("/", toysController.addToy);

export default toysRouter;