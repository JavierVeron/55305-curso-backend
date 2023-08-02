import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.routes.js";
import {Server} from "socket.io";

const app = express();
const puerto = 8080;
const httpServer = app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});
const socketServer = new Server(httpServer);

// Defino mis plantillas en mi Servidor HTTP
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", viewsRouter);

const mensajes = []; //Array de mensajes
const generarId = () => { return mensajes.length + 1}; //Función que genera Socket ID

// Defino los mensajes en mi Servidor Socket
socketServer.on("connection", (socket) => {
    console.log("Nueva Conexión!");

    /* socket.on("message", (data) => {
        console.log(data);
    });

    socket.emit("socket_individual", "Hola, este es un mensaje de prueba #1");

    socket.broadcast.emit("socket_individual2", "Hola, este no lo ve la conexión actual!");

    socket.emit("socket_individual3", "Hola, este es un mensaje de prueba #2"); */

    socket.on("mensaje", (data) => {
        mensajes.push({socketid:generarId(), mensaje:data});

        socket.broadcast.emit("mensajes", mensajes);
        socket.emit("mensajes", mensajes);
    });
});