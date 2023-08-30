const recuperarDatosCliente = async () => {
    const response = await fetch("/recuperar");
    const data = await response.json();
    console.log(`Usuario: ${data.name} - Email: ${data.user}`);
}

document.getElementById("btnRecuperar").onclick = recuperarDatosCliente;