// Desafio
const productos = [
    {id:1, nombre:"Gaseosa Coca Cola sabor original 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332148-1200-auto?v=638211437412370000&width=1200&height=auto&aspect=true", precio:681.00, marca:"Coca Cola"},
    {id:2, nombre:"Gaseosa cola Pepsi regular 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/308963-1200-auto?v=638146793769730000&width=1200&height=auto&aspect=true", precio:523.00, marca:"Pepsi"},
    {id:3, nombre:"Gaseosa 7 Up light lima limón 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277308-1200-auto?v=638128491408170000&width=1200&height=auto&aspect=true", precio:515.02, marca:"7 up"},
];

// Repaso de Arrays
//const productosFinal = productos.filter(item => item.marca !== "7 up");
//const productosFinal = productos.map(item => ({id:item.id, nombre:item.nombre, imagen:item.imagen, precio:item.precio}));
//let pos = productos.findIndex(item => item.marca == "7 up");
//productos.splice(pos, 1);
//const productosFinal = productos.slice(0, 2);
//const productosFinal = productos.toSpliced(1, 1);
//const productosFinal = productos;

function renderProductos() {
    let contenidoHTML = "";

    productos.forEach(item => {
        contenidoHTML += `<div class="col-md-4">
        <div class="card">
        <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
        <div class="card-body">
          <p class="card-text"><b class="text-primary">$${item.precio}</b><br><span class="text-secondary">${item.nombre}</span></p>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos();