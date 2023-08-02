const socket = io();
/* socket.emit("message", "Hola! Acabo de entrar en la Página Web!");

socket.on("socket_individual", (data) => {
    console.log(data);
});

socket.on("socket_individual2", (data) => {
    console.log(data);
});

socket.on("socket_individual3", (data) => {
    console.log(data);
}); */

const enviarMensaje = () => {
    let mensaje = document.getElementById("mensaje").value;

    socket.emit("mensaje", mensaje);
}

socket.on("mensajes", (data) => {
    let salida = `<ul class="class="list-group">`;

    data.forEach(item => {
        salida += `<li class="list-group-item">${item.socketid} - ${item.mensaje}</li>`;
    });

    salida += `</ul>`;
    document.getElementById("mensajes").innerHTML = salida;
});