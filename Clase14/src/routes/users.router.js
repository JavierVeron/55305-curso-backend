import { Router } from "express";
import { userModel } from "../models/user.model.js";

const userRouter = Router();

// Leer Documentos
userRouter.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({status:"OK", payload:users});
    } catch (error) {
        console.log("Error! No se pudo obtener los Usuarios! " + error);
    }
});

// Crear Documentos
userRouter.post("/", async (req, res) => {
    try {
        let {nombre, apellido, email} = req.body;

        if (!nombre || !apellido || !email) {
            return res.status(400).send({status:"Error", message:"Complete los campos: Nombre, Apellido y Email!"});
        }

        const resultado = await userModel.create(req.body);
        res.send({status:"Created", payload:resultado});
    } catch (error) {
        console.log("Error! No se pudo crear el Usuario! " + error);
    }
});

// Actualizar Documentos
userRouter.put("/:id", async (req, res) => {
    try {
        let {id} = req.params;
        let {nombre, apellido, email} = req.body;

        if (!nombre || !apellido || !email) {
            return res.status(400).send({status:"Error", message:"Complete los campos: Nombre, Apellido y Email!"});
        }

        const resultado = await userModel.updateOne({_id:id}, req.body);
        res.send({status:"Updated", payload:resultado});
    } catch (error) {
        console.log("Error! No se pudo actualizar el Usuario! " + error);
    }
});

// Eliminar Documentos
userRouter.delete("/:id", async (req, res) => {
    try {
        let {id} = req.params;
        const resultado = await userModel.deleteOne({_id:id});
        res.send({status:"Deleted", payload:resultado});
    } catch (error) {
        console.log("Error! No se eliminar el Usuario! " + error);
    }
});

export default userRouter;