import express from "express";

const router = express.Router();

let comidas = [
    {id:1, nombre:"Hamburguesa", precio: 2000},
    {id:2, nombre:"Papas Fritas", precio: 1000},
    {id:3, nombre:"Coca Cola", precio: 500},
    {id:4, nombre:"Sundae", precio: 500}
];

const users = [
    {nombre:"Mariel Boher", email:"mariel.boher@gmail.com", edad:26, curso:"Backend", role:"admin", style:"modo-black.css"},
    {nombre:"Kevin Auerbach", email:"kevin.auerbach@gmail.com", edad:26, curso:"JavaScript", role:"user", style:"modo-white.css"},
    {nombre:"Roberto Torales", email:"roberto.torales@gmail.com", edad:24, curso:"React JS", role:"user", style:"modo-black.css"},
    {nombre:"Aranzazu Galvaliz", email:"aranza@gmail.com", edad:27, curso:"Desarrollo Web", role:"admin", style:"modo-white.css"}
];

router.get("/", (req, res) => {
    /* const user = {
        nombre:"Kevin Auerbach",
        email:"kevin.auerbach@gmail.com",
        curso:"React JS"
    }; */

    let numeroAleatorio = Math.round(Math.random() * (users.length-1));
    let user = users[numeroAleatorio];
    const userApp = {user:user, isAdmin:user.role === "admin", style:"modo-black.css", comidas};

    res.render("index", userApp);
});

router.get("/register", (req, res) => {
    res.render("register", {style:"modo-white.css"});
});

router.get("/users", (req, res) => {
    res.send({users});
});

router.post("/user", (req, res) => {
    let {nombre, correo, clave} = req.body;

    let user = {nombre:nombre, correo:correo, clave:clave, edad:24, curso:"Node JS", role:"user"};
    users.push(user);
    res.send({status:"OK", message:"El usuario se agregó correctamente!"});
});

export default router;