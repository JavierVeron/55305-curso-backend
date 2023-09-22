import express from "express";
import config from "./config/config.js";

const app = express();
console.log(config);
app.listen(config.port, () => {
    console.log("Servidor Activo en el Puerto: " + config.port);
});

app.get("/", (req, res) => {
    res.send({message:"Hola!"})
});