import ToyService from "../services/toy.service.js";

class ToysController {
    constructor() {
        this.toyService = new ToyService();
    }

    getToys = async (req, res) => {
        let result = this.toyService.getToys();
        res.status(result.code).send({status:result.status, toys:result.toys});
    }

    addToy = async (req, res) => {
        const {name, brand} = req.body;
        let result = this.toyService.addToy({name, brand});
        res.status(result.code).send({status:result.status, message:result.message});
    }
}

export default ToysController;