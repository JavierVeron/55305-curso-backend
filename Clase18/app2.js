import express from "express";
import session from "express-session";

const app = express();
app.use(session({secret:"S3cr3t0", resave:true, saveUninitialized:true}));

app.get("/session", (req, res) => {
    req.session.nombre = "María Inés Casiba Palacio";

    if (req.session.contador) {
        req.session.contador++;
        res.send(req.session.nombre + " visitaste el Sitio Web: " + req.session.contador + " veces!");
    } else {
        req.session.contador = 1;
        res.send("Bienvenide! " + req.session.nombre);
    }
})

app.get("/login", auth, (req, res) => {
    res.send("Hola, " + req.session.user + "!");
})

app.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            return res.send("Error! No se pudo cerrar la sesión!");
        }

        res.send("Sesión finalizada!");
    })
})

// Creamos un middleware
function auth (req, res, next) {
    console.log(req.query);
    let {user, pass} = req.query;

    if (user === "pin" && pass === "pon") {
        req.session.user = user;
        req.session.pass = pass;
        return next();
    }
    
    return res.status(401).send("Login incorrecto!")
}

app.listen(8080, () => {
    console.log("Servidor activo!");
})