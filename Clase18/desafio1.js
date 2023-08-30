import express from "express";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";

const __dirname = "C:/xampp/htdocs/coderhouse/55305/curso/Clase18";
const app = express();
app.use(cookieParser());
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/enviar", (req, res) => {
    let {nombre, email} = req.body;
    res.cookie("datosCliente", {name:nombre, user:email}).send("Usuario creado!");
});

app.get("/recuperar", (req, res) => {
    res.send(req.cookies.datosCliente);
});

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("Servidor activo!");
})