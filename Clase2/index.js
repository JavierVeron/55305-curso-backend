// Operador exponecial
/* const numeros = [1, 2, 3, 4, 5];
const nuevosNumeros = numeros.map((item, indice) => (item**indice));
console.log(nuevosNumeros); */

// Operador includes
// Devuelve true o false en caso de encontrar un elemento en un array
/* const nombres = ["Rodrigo", "Sol", "Roberto", "Laura", "Juan"];
const productos = [
    {id:1, nombre:"Coca Cola"},
    {id:2, nombre:"Pepsi"},
    {id:3, nombre:"Manaos"},
]

console.log(nombres.includes("Sol")); //true
console.log(nombres.includes("Pepe")); //false
console.log(productos.some(producto => producto.nombre === "Coca Cola")); //Devuelve true o false validando en Objetos */


// Object (entries, keys y values)
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:700},
    {id:2, nombre:"Pepsi", precio:650},
    {id:3, nombre:"Manaos", precio:350}
]; // Esto es un Array

const producto = {id:1, nombre:"Coca Cola", precio:700}; // Esto es un Objeto */

// Object para Array
/* console.log(Object.entries(productos)); // Devuelve la estructura del array/objeto
console.log(Object.keys(productos)); // Devuelve las claves del array/objeto
console.log(Object.values(productos)); // Devuelve los valores del array/objeto */


// Object para Objeto
/* console.log(Object.entries(producto)); // Devuelve la estructura del array/objeto
console.log(Object.keys(producto)); // Devuelve las claves del array/objeto
console.log(Object.values(producto)); // Devuelve los valores del array/objeto */


// Operador Spread para Objetos
/* const objeto1 = {id:1, nombre:"Coca Cola", precio:700, promocion:"10% de descuento"};
const objeto2 = {id:2, nombre:"Pepsi", precio:650, descripcion:"Bebida con bajo nivel de azúcar"};
const objeto3 = {...objeto1, ...objeto2};
console.log(objeto3); */

// Operador Spread para Arrays
/* const cursosFrontEnd = [
    {id:1, nombre:"Desarrollo Web"},
    {id:2, nombre:"JavaScript"},
    {id:3, nombre:"React JS"}
];

const cursosBackend = [
    {id:4, nombre:"Backend Node JS"}
]

const cursoFullStack = [...cursosFrontEnd, ...cursosBackend];
console.log(cursoFullStack); */

// Operador Rest
/* const producto = {id:1, nombre:"Coca Cola", precio:700, promocion:"10% de descuento"};
let {nombre, precio, ...pepe} = producto;
console.log("Nombre: " + nombre);
console.log("Precio: " + precio);
console.log(pepe); */


// Trim - Remueve los espacios del comienzo y final de un string
/* let texto = "  Hola! ";
console.log(texto.length);
console.log(texto.trim().length);
console.log(texto.trimStart().length); //Quita espacios al comienzo de un String
console.log(texto.trimEnd().length); //Quita espacios al final de un String */

// Array Flat - Convertir un array con multiples array, a un nivel mas plano (chato)
/* const numeros = [0, 1, 2, [3, 4, [5, 6]]];
console.log(numeros);
console.log(numeros.flat(1));
console.log(numeros.flat(2)); */


// Operador Nullish - Versión mejorada del Operador OR ||
/* let valor1 = 0;
let validarValor1 = valor1 || "Error!";
let validarValor1a = valor1 ?? "Error!";
console.log(validarValor1);
console.log(validarValor1a); */

/* let valor2 = "";
let validarValor2 = valor2 || "Error!";
let validarValor2a = valor2 ?? "Error!";
console.log(validarValor2);
console.log(validarValor2a); */

/* let valor2 = true;
let validarValor2 = valor2 || "Error!";
let validarValor2a = valor2 ?? "Error!";
console.log(validarValor2);
console.log(validarValor2a); */

// Variables y Métodos Privados en un Clase
/* class Persona {
    #nombreCompleto
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#nombreCompleto = (`${nombre} ${apellido}`).toUpperCase();
    }

    darNombre() { //método público
        return this.#nombreCompleto;
    }

    #darApellido() { //método privado
        return this.apellido;
    }

    darNombreCorto() {
        return this.nombre + " " + this.#darApellido();
    }
}

const persona1 = new Persona("Matias", "Ferreyra");
console.log("Nombre: " + persona1.darNombreCorto()); */


class TicketManager {
    constructor() {
        this.eventos = [];
    }

    static precioBaseDeGanancia = 10000;

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio) {
        let fecha = new Date();
        const evento = {id:this.getId(), nombre:nombre, lugar:lugar, precio:precio*0.15, capacidad:50, fecha:fecha, participantes:[]};
        this.eventos.push(evento);
    }

    getId() {
        let max = 0;

        this.eventos.forEach(evento => {
            max = evento.id > max && evento.id;
        });

        return (max + 1);
    }

    agregarUsuario(idEvento, idUsuario) {
        let pos = this.eventos.findIndex(evento => evento.id === idEvento);

        if (pos > -1) {
            if (this.eventos[pos].participantes.includes(idUsuario)) {
                console.log("Error! Ya existe el Usuario!");
            } else {
                this.eventos[pos].participantes.push(idUsuario);
            }
        } else {
            console.log("Error! No existe el Evento!");
        }
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        let pos = this.eventos.findIndex(evento => evento.id === idEvento);
        const evento = this.eventos[pos]; //Evento Existe
        const nuevoEvento = {...evento, id:this.getId(), lugar:nuevaLocalidad, fecha:nuevaFecha, participantes:[]};
        this.eventos.push(nuevoEvento);
    }
}

const TM = new TicketManager();
TM.agregarEvento("CABA", "Movistar Arena", 50000);
TM.agregarEvento("CABA", "Velez", 40000);
console.log(TM.getEventos());
TM.agregarUsuario(1, 10);
TM.agregarUsuario(1, 10);
TM.agregarUsuario(1, 11);
TM.agregarUsuario(3, 11);
console.log(TM.getEventos());
TM.ponerEventoEnGira(2, "Hipódromo de San Isidro", "2023-07-09");
console.log(TM.getEventos());
