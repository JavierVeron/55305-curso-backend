const fs = require("fs");

class ManagerUsuarios {
    constructor() {
        this.archivo = "Usuarios.json";
        this.usuarios = [];
    }

    async agregar(user) {
        const usuario = {nombre:user.nombre, apellido:user.apellido, edad:user.edad, curso:user.curso};
        this.usuarios.push(usuario);
        await fs.promises.writeFile(this.archivo, JSON.stringify(this.usuarios))
        .then(() => {
            console.log("El archivo se guardó correctamente!");
        })
    }

    async consultar() {
        const usuarios = JSON.parse(await fs.promises.readFile(this.archivo, "utf-8"));
        console.log(usuarios);
    }
}

const MU = new ManagerUsuarios();
const usuario1 = {nombre:"Cristian", apellido:"Cubillos", edad:25, curso:"Backend Node JS"};
const usuario2 = {nombre:"Juan", apellido:"Debandi", edad:19, curso:"React JS"};
MU.agregar(usuario1);
MU.agregar(usuario2);
let usuarios = MU.consultar();
console.log(usuarios);