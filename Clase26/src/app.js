import express from "express";
import userRouter from "./routes/user.routes.js";
import toysRouter from "./routes/toys.routes.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/users", userRouter);
app.use("/api/toys", toysRouter);

app.listen(port, () => {
    console.log("Servidor Activo en el Puerto: " + port);
});