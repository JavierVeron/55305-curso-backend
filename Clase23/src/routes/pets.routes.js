import express from "express";

const petsRouter = express.Router();

const pets = [];

petsRouter.param("pet", async (req, res, next, pet) => {
    let petObj = pets.find(item => item.name == pet);
    req.pet = petObj ? petObj : null;

    next();
});

petsRouter.get("/:pet([a-z]+)", async (req, res) => {
    if (!req.pet) {
        return res.status(401).send({status:"error", message:"No se encuentra la mascota que estás buscando!"});
    }

    res.send({status:"ok", pet:req.pet});
});

petsRouter.post("/", async (req, res) => {
    const {name, specie} = req.body;
    let newPet = {name, specie};
    pets.push(newPet);
    res.send({status:"ok", pet:newPet});
});

petsRouter.put("/:pet([a-z]+)", async (req, res) => {
    if (!req.pet) {
        return res.status(401).send({status:"error", message:"No se encuentra la mascota que estás buscando!"});
    }

    req.pet.adopted = true;
    res.send({status:"ok", pet:req.pet});
});

petsRouter.get("*", async (req, res) => {
    res.status(404).send({status:"error", message:"No se encuentra la URL que estás buscando!"});
});

export default petsRouter;