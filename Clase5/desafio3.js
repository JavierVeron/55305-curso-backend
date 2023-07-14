const moment = require("moment");

const fechaActual = moment();
const fechaNacimiento = moment("2001-03-14");

// Valido si la fecha es válida
if (fechaNacimiento.isValid()) {
    console.log("La fecha de nacimiento es válida!");
    let anios = fechaActual.diff(fechaNacimiento, "years");
    let meses = fechaActual.diff(fechaNacimiento, "months");
    let dias = fechaActual.diff(fechaNacimiento, "days");
    let horas = fechaActual.diff(fechaNacimiento, "hours");
    let minutos = fechaActual.diff(fechaNacimiento, "minutes");
    let segundos = fechaActual.diff(fechaNacimiento, "seconds");
    
    console.log("El total de Años desde tu Nacimiento es: " + anios + " años!");
    console.log("El total de Meses desde tu Nacimiento es: " + meses + " meses!");
    console.log("El total de Días desde tu Nacimiento es: " + dias + " días!");
    console.log("El total de Horas desde tu Nacimiento es: " + horas + " horas!");
    console.log("El total de Minutos desde tu Nacimiento es: " + minutos + " minutos!");
    console.log("El total de Segundos desde tu Nacimiento es: " + segundos + " segundos!");
} else {
    console.log("Error! La fecha no es válida!");
}