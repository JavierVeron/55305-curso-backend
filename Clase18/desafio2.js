import express from "express";
import session from "express-session";

const app = express();
app.use(session({secret:"S3cr3t0", resave:true, saveUninitialized:true}));

app.get("/", (req, res) => {
    let {user} = req.query;

    if (req.session.contador) {
        req.session.contador++;
        res.send(user + " visitaste el Sitio Web: " + req.session.contador + " veces!");
    } else {
        req.session.contador = 1;
        res.send("Te damos la Bienvenide! " + user);
    }
})

app.listen(8080, () => {
    console.log("Servidor activo!");
})