const express = require("express");
const puerto = 8080;
const app = express();
const usuarios = [
    {id:1, nombre:"Guido Midolo", edad:24, genero:"M"},
    {id:2, nombre:"Kevin Auerbach", edad:26, genero:"M"},
    {id:3, nombre:"María Inés Casiba Palacio", edad:28, genero:"F"},
    {id:4, nombre:"Mariel Boher", edad:26, genero:"F"},
    {id:5, nombre:"Pablo Emanuel Juarez", edad:29, genero:"M"}
];

app.get("/", (request, response) => {
    let {genero} = request.query;
    genero = genero.toUpperCase();
    const usuariosFiltrados = (genero == "M") || (genero == "F") ? usuarios.filter(item => item.genero == genero) : usuarios;
    response.send({usuariosFiltrados}); 
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});