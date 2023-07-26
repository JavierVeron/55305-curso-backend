import { Router } from "express";
import { uploader } from "../utils.js";

const users = [
    {id:1, nombre:"Rodrigo García"},
    {id:2, nombre:"Juan Ignacio Debandi"},
    {id:3, nombre:"Mariel Boher"}
];

const usersRouter = Router();

// Middleware a nivel de Router
/* usersRouter.use(function (request, response, next) {
    console.log("Middleware a nivel de Router");
    next();
}); */

usersRouter.get("/", (request, response) => {
    response.send({users});
});

usersRouter.post("/", uploader.single("imagen"), (request, response) => {
    if (!request.file) {
        response.status(400).send({status:"Error", message:"Error! Debe cargar una imagen!"});
        return false;
    }

    let {nombre, apellido, edad} = request.body;
    users.push({name:nombre, lastname:apellido, age:edad, image:request.file.filename});
    response.send({status:"OK", message:"El usuario se agregó correctamente!"});
});

export default usersRouter;