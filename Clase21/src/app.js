import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import sessionsRouter from "./routes/sessions.routes.js";
import viewsRouter from "./routes/views.routes.js";
import session from "express-session";
import passport from "passport";
import initializePassport from "./config/passport.config.js";

const app = express();
const puerto = 8080;
const httpServer = app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});
mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/ecommerce?retryWrites=true&w=majority");
app.engine('handlebars', handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
initializePassport();
app.use(session({secret:"CoderSecrets"}));
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/sessions/", sessionsRouter);
app.use("/", viewsRouter);