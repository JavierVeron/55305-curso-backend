import express from "express";
import usersRouter from "./src/users.router.js";
import petsRouter from "./src/pets.router.js";
import __dirname from "./utils.js";

const app = express();
const puerto = 8080;

// Middlewares de montaje
/* app.use(function(req, res, next) {
    console.log("Estoy en el montaje de mi App");
    next();
}); */

// Middleware a nivel de endpoint
/* function middleware1 (request, response, next) {
    console.log("Middleware a nivel de endpoint #1");
    next();
}

function middleware2(request, response, next) {
    console.log("Middleware a nivel de endpoint #2");
    next();
} */

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use("/api/users", middleware1, middleware2, usersRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use(express.static(__dirname + "/public"));

// Middleware para manejo de errores
/* app.use(function(error, request, response, next) {
    console.log(error.stack);
    response.status(500).send("Error! Hubo un error en la app!");
}); */

app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});