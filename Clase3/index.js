/* const productos = [
    {id:1, nombre:"Coca Cola"},
    {id:2, nombre:"Pepsi"},
    {id:3, nombre:"Manaos"}
];

let valorBuscado = "Pepsi";
let producto = productos.find(prod => prod.nombre === valorBuscado);
console.log(producto); */

const valores = [0, 1, 2, 3, 4];
/* const nuevosValores = valores.map(item => (item * 2) + 1);
console.log(nuevosValores); */

/* const esPar = (numero) => {
    return (numero%2 === 0) ? "Es par!" : "No es par!";
}

//const nuevosValores = valores.map(esPar);
const nuevosValores = valores.map((numero) => {
    return (numero%2 === 0) ? "Es par!" : "No es par!";
});
console.log(nuevosValores); */


// Operaciones con Callbacks
/* const suma = (valor1, valor2) => { return valor1 + valor2 };
const resta = (valor1, valor2) => { return valor1 - valor2 };
const multiplicacion = (valor1, valor2) => { return valor1 * valor2 };
const division = (valor1, valor2) => { return valor1 / valor2 };

const operacion = (num1, num2, callback) => {
    let resultado = callback(num1, num2); //suma(10, 20) => 30
    console.log("El resultado es: " + resultado);
}

operacion(10, 20, suma);
operacion(30, 20, resta);
operacion(10, 20, multiplicacion);
operacion(40, 20, division); */


// Promesas
/* const dividir = (numero, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("Error! No se puede dividir con un valor a 0!"); //Se rechazó la promesa
        } else {
            resolve(numero/divisor); //Se completó la promesa
        }
    });
};

dividir(40, 20)
.then(valor => { //En caso de que se completa la promesa
    console.log("El resultado es: " + valor);
})
.catch(error => { //En caso de que se rechaze la promesa
    console.log(error);
})
.finally(() => { //Se ejecuta en última lugar independientemente si la promesa se cumple o no 
    console.log("Fin del proceso!");
}); */


/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then(valor => {
    console.log("Valor: " + valor);
    return valor * 2;
}).then(valor => {
    console.log("Valor: " + valor);
    return valor * 3;
}).then(valor => {
    console.log("Valor: " + valor);
}) */


// Funciones sincrónas
/* function funcA() {
    console.log(1);
    funcB();
    console.log(2);
}

function funcB() {
    console.log(3);
    funcC();
    console.log(4);
}

function funcC() {
    console.log(5);
}

funcA(); */

//Funciones asíncronas
/* const escribirArchivo = () => {
    setTimeout(() => {
        console.log("Escribiendo en archivo...");
    }, 0);
}

console.log("Inicio del programa..."); //se ejecutó en forma síncrona
escribirArchivo(); //se ejecutó en forma asíncrona
console.log("Fin del programa..."); //se ejecutó en forma síncrona */


// Async/Await
/* const dividir = (numero, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("Error! El divisor debe ser distinto de 0!");
        } else {
            resolve(numero/divisor);
        }
    })
}

const operacionAsincrona = async () => {
    try {
        let resultado = await dividir(40, 0);
        console.log("El resultado es: " + resultado);
    } catch(valor) {
        // redirect que vaya a una pagina informando el error
        console.log(valor);
    }
}

operacionAsincrona(); */


// Ejercicio Práctico
// Declaración de Funciones
const suma = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 + valor2;
        resultado < 0 ? reject("La calculadora debe devolver valores positivos!") : resolve(resultado);
    });
}

const resta = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 == 0) || (valor2 == 0)) && reject("Operación innecesaria!");
        let resultado = valor1 - valor2;
        resultado < 0 ? reject("La calculadora debe devolver valores positivos!") : resolve(resultado);
    });
}

const multiplicacion = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        ((valor1 < 0) || (valor2 < 0)) && reject("Ningún valor debe ser negativo!");
        let resultado = valor1 * valor2;
        resultado < 0 ? reject("La calculadora debe devolver valores positivos!") : resolve(resultado);
    });
}

const division = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor2 === 0) {
            reject("Error! El divisor debe ser distinto de 0!");
        } else {
            resolve(valor1/valor2);
        }
    });
}
const calculos = async () => {
    try {
        /* let resultado = await suma(-20, -30);
        console.log("Resultado Suma: " + resultado); */
        /* let resultado2 = await resta(40, 40);
        console.log("Resultado Resta: " + resultado2); */
        /* let resultado3 = await multiplicacion(10, 30);
        console.log("Resultado Multiplicación: " + resultado3); */
        let resultado4 = await division(-40, 20);
        console.log("Resultado Divisón: " + resultado4);
    } catch(error) {
        console.log(error);
    }
}

calculos();