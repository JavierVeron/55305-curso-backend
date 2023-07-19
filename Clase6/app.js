const express = require("express");
const puerto = 8080;
const app = express();
app.get("/saludo", (request, response) => {
    response.send("Hola Mundo!");
});
app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
})