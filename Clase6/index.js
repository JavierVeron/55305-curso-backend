const http = require("http");
const server = http.createServer((req, res) => {
    let nombre = "Coders!!!";
    res.end("Hola " + nombre);
});
server.listen(8080, () => {
    console.log("Servidor conectado al Puerto: 8080");
});