import express from "express";
import { fork } from "child_process";

const app = express();
const port = 8080;
app.listen(port, () => {
    console.log("Servidor Activo en el Puerto: " + port);
});

const suma = () => {
    let contador = 0;

    for (let i=0; i<10000000000; i++) {
        contador += i;
    }

    return contador;
}

let visitas = 0;

app.get("/", (req, res) => {
    visitas++;
    res.send("Bienvenido! Esta es la visita N°: " + visitas);
});

app.get("/calculo-bloq", (req, res) => {
    const resultado = suma();
    res.send("El resultado de la operación es: " + resultado);
});

app.get("/calculo-nobloq", (req, res) => {
    const hijo = fork("./funcionCompleja.js");
    hijo.send("Inicio del proceso!");
    hijo.on("message", resultado => {
        res.send("El resultado de la operación es: " + resultado);
    });
});