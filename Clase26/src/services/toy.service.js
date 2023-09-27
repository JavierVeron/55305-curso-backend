import ToyModel from "../models/toy.model.js";

class ToyService {
    constructor() {
        this.toyModel = new ToyModel();
    }

    getToys = () => {
        return {code:200, status:"ok", toys:this.toyModel.getToys()};
    }

    addToy = (toy) => {
        if (toy.name.length < 3) {
            return {code:401, status:"error", message:"Error! La longitud del Nombre es menor a 3 caracteres!"};
        }

        if (toy.brand.length < 3) {
            return {code:401, status:"error", message:"Error! La longitud de la Marca es menor a 3 caracteres!"};
        }

        let result = this.toyModel.addToy(toy);

        if (result > 0) {
            return {code:200, status:"ok", message:"El Juguete se agregó correctamente!"};
        }
    }
}

export default ToyService;