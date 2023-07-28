import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./src/routes/views.routes.js";

const app = express();
const puerto = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", viewsRouter);

app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});