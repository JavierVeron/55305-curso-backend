/* console.log(process.cwd());
console.log(process.pid);
console.log(process.env); */

// Argumentos
//console.log(process.argv);

// Utilizamos el slice 
//console.log(process.argv.slice(2));

import {Command} from "commander";

const programa = new Command();

programa
.option("-d", "Variable para debuggear", false)
.option("-p <port>", "Puerto", 8080)
.option("--mode <mode>", "Ambiente", "develop")
.option("-u <user>", "Usuario del Sistema", "root")
.option("-l, --letters [letters...]", "Arrays")

programa.parse();

console.log("Options: ", programa.opts());
console.log("Arguments: ", programa.args);