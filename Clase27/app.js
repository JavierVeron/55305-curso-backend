import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.get("/test", (req, res) => {
    res.send({message:"Hola Mundo!"});
});
app.listen(port, () => {
    console.log("Servidor activo: " + port);
});
