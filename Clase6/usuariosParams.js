const express = require("express");
const puerto = 8080;
const app = express();
const usuarios = [
    {id:1, nombre:"Guido Midolo", edad:24},
    {id:2, nombre:"Kevin Auerbach", edad:26},
    {id:3, nombre:"María Inés Casiba Palacio", edad:28}
];

app.get("/", (request, response) => {
    response.send({usuarios});
});
app.get("/:idUsuario", (request, response) => {
    const id = Number(request.params.idUsuario);
    const usuario = usuarios.find(item => item.id === id);
    const usuarioFiltro = usuario ? usuario : "Error! No existe el ID del Usuario!";
    response.send({usuario:usuarioFiltro});
});
app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});