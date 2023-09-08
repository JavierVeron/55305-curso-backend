import express from "express";
import { generateToken, authToken } from "./utils2.js";
const PRIVATE_KEY = "S3CR3T0";

const app = express();
const puerto = 8080;
const httpServer = app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});

const users = [];

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    let user = users.find(item => item.email == email);

    if (user) {
        return res.status(401).send({status:"error", message:"Error! El usuario ya existe!"})
    } else {
        let user = {name, email, password};
        users.push(user);
        let token = generateToken(user);

        res.send({status:"OK", token:token});
    }
});

app.get("/login", (req, res) => {
    const {email, password} = req.body;
    let user = users.find(item => item.email == email && item.password == password);

    if (!user) {
        return res.status(401).send({status:"error", message:"No existe el Usuario ingresado!"});
    }

    let token = generateToken(user);
    res.send({status:"OK", token:token});
});

app.get("/current", authToken, (req, res) => {
    res.send({status:"OK", payload:req.user});
});