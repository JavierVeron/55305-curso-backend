import express from "express";
import contactsRouter from "./routes/contacts.router.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/contacts", contactsRouter);
app.listen(port, () => {
    console.log("Servidor conectado: " + port);
})