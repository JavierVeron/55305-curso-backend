const express = require("express");
const puerto = 8080;
const app = express();
app.get("/", (request, response) => {
    response.send("Hola a Todos!");
});
app.get("/parametro/:nombre", (request, response) => {
    let nombre = request.params.nombre;
    response.send("Bienvenido, " + nombre);
});
app.get("/curso/:nombre/:clase", (request, response) => {
    let nombre = request.params.nombre;
    let clase = request.params.clase;
    response.send("Estas en la Clase " + clase + " del curso de " + nombre + "!");
});
app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
})