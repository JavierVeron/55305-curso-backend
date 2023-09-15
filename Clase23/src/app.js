import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";
import { generateToken } from "./utils2.js";
import { passportCall, authorization } from "./utils3.js";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import jwt from "jsonwebtoken";
import dictionaryRouter from "./routes/dictionary.routes.js";
import petsRouter from "./routes/pets.routes.js";
import UsersRouter from "./routes/user.router.js";
const PRIVATE_KEY = "S3CR3T0";

const app = express();
const puerto = 8080;
const httpServer = app.listen(puerto, () => {
    console.log("Servidor Activo en el puerto: " + puerto);
});

const users = [];
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());
app.use("/api/dictionary", dictionaryRouter);
app.use("/api/pets", petsRouter);

const usersRouter = new UsersRouter();
app.use("/api/users", usersRouter.getRouter());

app.get("/", (req, res) => {
    res.render("home");   
});

app.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    let user = users.find(item => item.email == email);

    if (user) {
        return res.status(401).send({status:"error", message:"Error! El usuario ya existe!"})
    } else {
        let user = {name, email, password};
        users.push(user);
        let token = generateToken(user);

        res.send({status:"OK", token:token});
    }
});

app.post("/login", (req, res) => {
    const {email, password} = req.body;

    let user = users.find(item => item.email == email && item.password == password);

    if (!user) {
        return res.status(401).send({status:"error", message:"No existe el Usuario ingresado!"});
    }

    let token = jwt.sign({email:email, password:password, role:"user"}, PRIVATE_KEY, {expiresIn:"24h"});
    res.cookie("coderCookieToken", token, {maxAge:3600*1000, httpOnly:true}).send({status:"OK", message:"Logueado!"});
    //res.send({status:"OK", token:token});
});

/* app.get("/current", passport.authenticate("jwt", {session:false}), (req, res) => {
    res.send({status:"OK", payload:req.user});
}); */

app.get("/current", passportCall("jwt"), authorization("user"), (req, res) => {
    res.send({status:"OK", payload:req.user});
});