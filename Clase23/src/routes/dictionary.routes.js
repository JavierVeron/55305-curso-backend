import express from "express";

const dictionaryRouter = express.Router();

dictionaryRouter.param("word", async (req, res, next, word) => {
    const saludos = ["hola", "buendia", "chau", "adios"];

    if (saludos.includes(word)) {
        req.word = word;
    } else {
        req.word = "No existe el saludo ingresado!"
    }

    next();
});

dictionaryRouter.get("/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
    res.send(req.word);
});

dictionaryRouter.post("/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
    res.send(req.params.word);
});

dictionaryRouter.put("/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
    res.send(req.params.word);
});

dictionaryRouter.delete("/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)", async (req, res) => {
    res.send(req.params.word);
});

dictionaryRouter.get("*", async (req, res) => {
    res.status(404).send({status:"error", message:"No se encuentra la URL que estás buscando!"});
});

export default dictionaryRouter;