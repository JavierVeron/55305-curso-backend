const express = require("express");
const puerto = 8080;
const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", (request, response) => {
    const {curso, clase} = request.query;
    const queryParams = request.query;
    //response.send(`Estas en la clase ${clase} del curso de ${curso}!`);
    response.send({queryParams});
});

app.listen(puerto, () => {
    console.log("Servidor conectado al puerto: " + puerto);
});