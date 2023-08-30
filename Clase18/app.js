import express from "express";
import cookieParser from "cookie-parser";

const app = express();
//app.use(cookieParser()); 
app.use(cookieParser("S3cr3t0!")); 


app.get("/setCookie", (req, res) => {
    //res.cookie("miGalletita", "Galleta de arroz con chocolate", {maxAge:10000}).send("Cookie creada!");
    res.cookie("miGalletita", "Galleta de arroz con chocolate").send("Cookie creada!");
});

app.get("/getCookie", (req, res) => {
    //res.send(req.cookies.miGalletita);
    res.send(req.signedCookies.chocoArroz);
});

app.get("/deleteCookie", (req, res) => {
    res.clearCookie("miGalletita").send("Cookie eliminada!");
});

app.get("/signedCookie", (req, res) => {
    res.cookie("chocoArroz", "Galleta de arroz con chocolate", {signed:true}).send("Cookie firmada creada!")
})

app.listen(8080, () => {
    console.log("Servidor activo!");
})