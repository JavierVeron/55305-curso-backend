import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
//import FileStore from "session-file-store";
//import __dirname from "./utils.js";
import MongoStore from "connect-mongo";

//const fileStore = FileStore(session);
const app = express();
//app.use(express.static(__dirname + "/src"));
app.use(cookieParser()); 
/* app.use(session({
    store:new fileStore({path:"./sessions", ttl:100, retries:0}),
    secret:"S3cr3t0",
    resave:false,
    saveUninitialized:false
})); */
app.use(session({
    store:MongoStore.create({
        mongoUrl:"mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/test?retryWrites=true&w=majority",
        mongoOptions:{useNewUrlParser:true, useUnifiedTopology:true},
        ttl:20
    }),
    secret:"S3cr3t0",
    resave:false,
    saveUninitialized:false
}));

app.get("/session", (req, res) => {
    if (req.session.contador) {
        req.session.contador++;
        res.send("Visitaste el Sitio Web: " + req.session.contador + " veces!");
    } else {
        req.session.contador = 1;
        res.send("Bienvenide!");
    }
})

app.listen(8080, () => {
    console.log("Servidor activo!");
})