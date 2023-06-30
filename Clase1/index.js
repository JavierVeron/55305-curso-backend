// Variables globales y locales
//let valor = 10; //Variable global

/* function multi() {
    valor = valor * 2;
} */

/* function multi() {
    let valor = 30; //variable local (scope = alcance)
    console.log("Valor (local): " + valor);
    //return valor;
}

//let valor2 = multi();
multi();
//console.log("Valor: " + valor);
//console.log("Valor: " + valor2); */


// Diferencia entre variables y constantes
/* let valor = 10;
valor = 20;
const valor2 = 20;
valor2 = 30;
console.log(valor);
console.log(valor2); */


// Los objetos son mutables (pueden ser modificables)
/* const producto = {id:1, nombre:"Coca Cola"};
producto.nombre = "Pepsi";
producto.precio = 700;
producto.numero = 123;
console.log(producto); */


// Funciones
// Declaración de una Función
/* function multiplicar(num1, num2) {
    return num1 * num2;
} */

// Declaración de una Función Anónima
/* const multiplicar = function (num1, num2) {
    return num1 * num2;
} */

// Declaración de una Función Flecha
/* const multiplicar = (num1, num2) => {
    return num1 * num2
} */

/* let resultado = multiplicar(20, 20);
console.log("Resultado: " + resultado); */


// Plantillas Literal
/* const IMC = (peso, altura) => {
    return peso / (altura * altura)
}

let peso = 85;
let altura = 1.76;
let resultado = (IMC(peso, altura)).toFixed(2); */

// Concatenando string con variables
/* let salida = "Peso: " + peso + "Kg.\n";
salida += "Altura: " + altura + "mts\n";
salida += "IMC: " + resultado + "%"; */

// Plantillas literales o template strings
/* let salida = `Peso: ${peso}Kg.
Altura: ${altura}mts
IMC: ${resultado}%`;

console.log(salida); */


// Declaración de una Clase
/* class Producto {
    constructor(nombreProducto, precioProducto) {
        this.nombre = nombreProducto;
        this.precio = precioProducto;
    }

    static iva = 21;
    static informarIVA() {
        return Producto.iva;
    }

    static darHora() {
        let fecha = new Date();

        return fecha.getHours() + ":" + fecha.getMinutes();
    }

    darNombre() {
        return this.nombre;
    }

    darPrecio() {
        return this.precio;
    }
}

console.log("IVA: " + Producto.iva + "%");
const prod1 = new Producto("Coca Cola", 700);
const prod2 = new Producto("Pepsi", 650);
console.log("Producto: " + prod1.darNombre());
console.log("Producto: " + prod2.darNombre());
console.log("Dame el IVA: " + Producto.informarIVA());
console.log(prod1);
console.log("Hora: " + Producto.darHora()); */


