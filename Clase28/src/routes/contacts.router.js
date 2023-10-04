import {Router} from "express";
import { ContactsService } from "../repository/index.js";

const contactsRouter = Router();

contactsRouter.get("/", async (req, res) => {
    let result = await ContactsService.getContacts();

    res.send({status:"ok", data:result});
});

contactsRouter.post("/", async (req, res) => {
    const {name, lastname, phone} = req.body;
    let result = await ContactsService.createContact({name, lastname, phone});

    res.send({status:"ok", data:result});
});

contactsRouter.put("/:emailId", async (req, res) => {
    const {emailId} = req.params;
    const {name, email, phone} = req.body;
    let result = await ContactsService.update(emailId, {name, email, phone});

    res.send({status:"ok", data:result});
});

contactsRouter.delete("/:emailId", async (req, res) => {
    const {emailId} = req.params;
    let result = await ContactsService.delete(emailId);

    res.send({status:"ok", data:result});
});

export default contactsRouter;