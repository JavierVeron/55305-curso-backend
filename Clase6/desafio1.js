const express = require("express");
const puerto = 8080;
const app = express();
app.get("/", (request, response) => {
    let contenido = `<html>
    <head>
    <style>
    *{
        margin:0;
        padding:0;
    }
    </style>
    </head>
    <body>
    <ul style="list-style:none; color:white; background-color:black; padding:25px;">
        <li style="display:inline-block;"><a href="/bienvenida" style="color:white; text-decoraction:none;">Bienvenida</a></li>
        <li style="display:inline-block;"><a href="/usuario" style="color:white; text-decoraction:none;">Usuario</a></li>
    </ul>
    </body>
    </html>`;
    response.send(contenido);

});
app.get("/bienvenida", (request, response) => {
    let contenido = `<html>
    <style>
    *{
        margin:0;
        padding:0;
    }
    </style>
    <body>
    <h1 style='color:white; background-color:red;text-align:center; padding:25px;'>Hola Mundo!</h1>
    </body>
    </html>`;
    response.send(contenido);

});
app.get("/usuario", (request, response) => {
    const usuario = {nombre:"Rodrigo", apellido:"García", edad:19, correo:"rodrigo.garcia@gmail.com"};
    response.send({usuario});
});
app.listen(puerto, () => {
    console.log("Servidor activo: " + puerto);
});