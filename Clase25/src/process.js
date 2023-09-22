/* process.on("exit", valor => {
    console.log("Proceso Finalizado! " + valor);
})

process.on("uncaughtException", valor => {
    console.log("Error! Exception: " + valor);
})

process.on("message", valor => {
    console.log("Proceso child! " + valor);
})

console() */

import express from "express";
import config from "./config/config.js";
import { fork } from "child_process";

const app = express();
console.log(config);
app.listen(config.port, () => {
    console.log("Servidor Activo en el Puerto: " + config.port);
});

/* const funcionCompleja = () => {
    let contador = 0;

    for (let i=0; i<10000000000; i++) {
        contador += i;
    }

    return contador;
} */

app.get("/", (req, res) => {
    res.send("Estoy en la Página Principal");
});

/* app.get("/suma", (req, res) => {
    const resultado = funcionCompleja();
    res.send("El resultado de la operación es: " + resultado);
}); */

app.get("/suma", (req, res) => {
    const hijo = fork("./funcionCompleja.js");
    hijo.send("Inicio del proceso!");
    hijo.on("message", resultado => {
        res.send("El resultado de la operación es: " + resultado);
    });
});