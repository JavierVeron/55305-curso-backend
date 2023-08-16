import express from "express";
import userRouter from "./routes/users.router.js";
import mongoose from "mongoose";

const app = express();
const puerto = 8080;
app.listen(puerto, () => {
    console.log("Servidor conectado en el puerto: " + puerto);
});

mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());
app.use("/api/users", userRouter);