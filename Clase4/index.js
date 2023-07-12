// Operaciones síncronas
/* console.log("Inicio programa");
console.log("Mitad de programa");
console.log("Fin programa"); */

// Operaciones síncronas con setTimeout
/* const funcionAsincrona = (funcion) => {
    setTimeout(() => {
        funcion();
    }, 2000);
}

const miFuncion = () => {
    console.log("Ejecutando operación...");
}

console.log("Inicio programa");
funcionAsincrona(miFuncion);
console.log("Fin programa"); */


// Operaciones síncrona
/* console.log("Inicio programa");
const numeros = [2, 4, 5, 8, 10];

numeros.forEach(item => {
    console.log("Ejecutando... #" + item);
})

console.log("Fin programa"); */

// Operaciones asíncronas con setInterval
/* const contador = () => {
    let total = 0;

    const intervalo = setInterval(() => {
        total += 1;
        console.log("Ejecutando... #" + total);

        if (total == 5) {
            console.log("Se realizaron los 5 intentos. Se termina el programa.");
            clearInterval(intervalo);
        }
    }, 2000);
}

console.log("Inicio programa");
contador();
console.log("Fin programa"); */



// Manejo de Archivos
const fs = require("fs"); //Opción #1 utilizando require
//const {fs} = import("fs"); //Opción #2 importando el módulo

// Ejemplo de Archivo síncronos
/* let nombreArchivo = "archivoSincrono.txt";
//fs.writeFileSync(nombreArchivo, "Hola Coders!\n"); // Para escribir un archivo
//fs.writeFileSync(nombreArchivo, JSON.stringify({id:1, nombre:"Coca Cola", precio:700})); //codificamos contenido Objeto
fs.writeFileSync(nombreArchivo, JSON.stringify([{id:1, nombre:"Coca Cola", precio:700}, {id:2, nombre:"Pepsi", precio:650}]));

if (fs.existsSync(nombreArchivo)) { // Devuelve true o false si existe o no el archivo.
    //let contenido = fs.readFileSync(nombreArchivo, "utf-8");
    let contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8")); // Parseamos contenido tipo Objeto
    console.log(contenido);

    //let nuevoTexto = "Curso de Backend!\n";
    //fs.appendFileSync(nombreArchivo, nuevoTexto); // Actualizo mi archivo
    let nuevoObjeto = {id:3, nombre:"Manaos", precio: 450};
    contenido.push(nuevoObjeto);
    fs.writeFileSync(nombreArchivo, JSON.stringify(contenido)); // Actualizo mi archivo

    contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8")); // Vuelo a leer el archivo
    console.log(contenido);

    // Eliminar el archivo
    fs.unlinkSync(nombreArchivo);
} else {
    console.log("No existe!");
} */


// Ejemplo de archivos con callbacks
/* let nombreArchivo = "archivoConCallback.txt";

// Escribo mi archivo
fs.writeFile(nombreArchivo, "Hola Coders!\n", (error) => {
    error && console.log("Error! No se pudo guardar el archivo!");

    // Leo mi archivo
    fs.readFile(nombreArchivo, "utf-8", (error, contenido) => {
        error && console.log("Error! No se pudo leer el archivo!");
        //console.log(contenido);
    });

    // Actualizo mi archivo
    fs.appendFile(nombreArchivo, "Curso de Backend!\n", (error) => {
        error && console.log("Error! No se pudo actualizar el archivo!");
    });

    fs.readFile(nombreArchivo, "utf-8", (error, contenido2) => {
        error && console.log("Error! No se pudo leer el archivo!");
    
        console.log(contenido2);
    });

    // Elimino mi archivo
    fs.unlink(nombreArchivo, (error) => {
        error && console.log("Error! No se pudo eliminar el archivo!");
    })
}); */


// Desafio #1
/* const fecha = new Date();
const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
fs.writeFile("fechaActual.txt", fechaActual, (error) => {
});

fs.readFile("fechaActual.txt", "utf-8", (error, contenido) => {
    error && console.log("Error! No se encontró el archivo!");
    console.log(contenido);
}) */


// Ejemplo de archivos con promesas
/* let nombreArchivo = "archivosConPromesas.txt";
const funcionesAsincronas = async () => {
    // Creo mi archivo
    await fs.promises.writeFile(nombreArchivo, "Hola Coders!\n");
    // Leo mi archivo
    //let contenido = await fs.promises.readFile(nombreArchivo, "utf-8");
    //console.log(contenido);
    // Actualizo mi archivo
    await fs.promises.appendFile(nombreArchivo, "Curso de Backend!\n");
    // Leo mi archivo
    let contenido = await fs.promises.readFile(nombreArchivo, "utf-8");
    console.log(contenido);
    // Elimino mi archivo
    await fs.promises.unlink(nombreArchivo);
};

funcionesAsincronas(); */


// Desafio #2
/* const desafio2 = async () => {
    try {
        let archivo = "info.json";
        let packageJson = JSON.parse(await fs.promises.readFile("package.json", "utf-8"));
        console.log(packageJson);
        const info = {
            contenidoStr:JSON.stringify(packageJson),
            contenidoObj:packageJson
        }
        await fs.promises.writeFile(archivo, JSON.stringify(info));
        let contenidoInfo = JSON.parse(await fs.promises.readFile(archivo, "utf-8"));
        console.log(contenidoInfo);
    } catch (error) {
        console.log("Error! No se pudo leer el archivo!");
    }
}

desafio2(); */

