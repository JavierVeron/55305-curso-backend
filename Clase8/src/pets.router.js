import { Router } from "express";

const pets = [
    {id:1, nombre:"Amy"},
    {id:2, nombre:"Benita"},
    {id:3, nombre:"Mora"}
];

const petsRouter = Router();

petsRouter.get("/", (request, response) => {
    response.send({pets});
});

petsRouter.post("/", (request, response) => {
    let nombre = request.body.nombre;
    pets.push({nombre});
    response.send({status:"OK", message:"La mascota se agregó correctamente!"});
});

export default petsRouter;