const fs = require("fs");
const crypto = require("crypto");

class UserManager {
    constructor() {
        this.usuarios = [];
        this.archivo = "Usuarios.json";
    }

    agregarUsuario(objeto) {
        const user = {nombre:objeto.nombre, apellido:objeto.apellido, usuario:objeto.usuario, clave:this.encriptarClave(objeto.clave)};

        if (!fs.existsSync(this.archivo)) {
            fs.writeFileSync(this.archivo, JSON.stringify(this.usuarios, null, 2));
        }

        this.usuarios = JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
        this.usuarios.push(user);
        fs.writeFileSync(this.archivo, JSON.stringify(this.usuarios, null, 2));
    }

    validarUsuario(usuario, clave) {
        this.usuarios = JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
        let resultado = this.usuarios.some(user => user.usuario === usuario && user.clave === this.encriptarClave(clave));

        if (resultado) {
            console.log("Usuario logueado!");
        } else {
            resultado = this.usuarios.some(user => user.usuario === usuario);

            console.log(!resultado ? "El usuario no existe!" : "La contraseña no coincide!");
        }
    }

    encriptarClave(clave) {
        let claveCodificada = crypto.createHash("sha256", clave)
        .update(clave)
        .digest("hex");

        return claveCodificada
    }
}

const PM = new UserManager();
//PM.agregarUsuario({nombre:"Rodrigo", apellido:"García", usuario:"garciar", clave:"112233"});
//PM.agregarUsuario({nombre:"Mariel", apellido:"Boher", usuario:"boherm", clave:"112244"});
PM.validarUsuario("boherm", "112244");
