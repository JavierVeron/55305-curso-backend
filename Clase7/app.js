const express = require("express");
const app = express();
const puerto = 8080;

app.use(express.json()); //Mi app reciba post en formato JSON
app.use(express.urlencoded({extended:true})); //Codifique las URL de los endpoints

let users = []; //Array de Usuarios

app.get("/api/users/", (request, response) => {
    response.send({users});
});

app.get("/api/user/", (request, response) => {
    let {email} = request.query;

    if (!email) {
        response.status(500).send({status:"error", message:"Error! Complete el campo Email!"});
        return false;
    }

    let user = users.find(item => item.email === email);

    if (!user) {
        response.status(500).send({status:"error", message:"Error! No se encontró un Usuario con ese Email!"});
        return false;
    }

    response.send({user});
});

app.post("/api/user/", (request, response) => {
    let user = request.body;
    
    if (!user.nombre) {
        response.status(500).send({status:"error", message:"Error! Complete el campo Nombre!"});
        return false;
    }

    if (!user.email) {
        response.status(500).send({status:"error", message:"Error! Complete el campo Email!"});
        return false;
    }

    users.push({nombre:user.nombre, email:user.email});
    response.send({status:"ok", message:"Se agregó el Usuario correctamente!"});
});

app.put("/api/user/", (request, response) => {
    let user = request.body;
    
    if (!user.nombre) {
        response.status(500).send({status:"error", message:"Error! Complete el campo Nombre!"});
        return false;
    }

    if (!user.email) {
        response.status(500).send({status:"error", message:"Error! Complete el campo Email!"});
        return false;
    }

    let userArray = users.find(item => item.email === user.email);

    if (!userArray) {
        response.status(500).send({status:"error", message:"Error! No se encontró un Usuario con ese Email!"});
        return false;
    }

    userArray.nombre = user.nombre;
    
    response.send({status:"ok", message:"Se actualizó el Usuario correctamente!"});
});

app.delete("/api/user/", (request, response) => {
    let {email} = request.query;

    if (!email) {
        response.status(500).send({status:"error", message:"Error! Complete el parámetro Email!"});
        return false;
    }

    let userArray = users.find(item => item.email === email);

    if (!userArray) {
        response.status(500).send({status:"error", message:"Error! No se encontró un Usuario con ese Email!"});
        return false;
    }

    users = users.filter(item => item.email !== email);

    response.send({status:"ok", message:"Se eliminó el Usuario correctamente!"});
})

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});