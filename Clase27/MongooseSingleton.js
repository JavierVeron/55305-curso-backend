import mongoose from "mongoose";

class MongooseSingleton {
    static #instancia;

    constructor() {
        mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true});
    }

    static obtenerInstacia() {
        if (this.#instancia) {
            console.log("Ya estoy conectado!");
            return this.#instancia;
        }

        this.#instancia = new MongooseSingleton();
        console.log("Conectado por primera vez!");
        return this.#instancia;
    }
}

export default MongooseSingleton;