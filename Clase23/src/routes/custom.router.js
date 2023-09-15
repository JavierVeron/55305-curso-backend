import { Router } from "express";

export default class CustomRouter {
    constructor() {
        this.router = Router();
        this.init();
    }

    getRouter() {
        return this.router;
    }

    init() {

    }

    get(path, ...callbacks) {
        this.router.get(path, this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    post(path, ...callbacks) {
        this.router.post(path, this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    put(path, ...callbacks) {
        this.router.put(path, this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    delete(path, ...callbacks) {
        this.router.delete(path, this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    applyCallbacks(callbacks) {
        return callbacks.map((callback) => async(...params) => {
            try {
                await callback.apply(this, params);
            } catch(error) {
                console.log(error);
                params[1].status(500).send(error);
            }
        })
    }

    generateCustomReponses(req, res, next) {
        res.sendSuccess = payload => res.send({status:"sucess", payload:payload});
        res.sendServerError = error => res.status(500).send({status:"error", error:error});
        res.sendUserError = error => res.status(400).send({status:"error", error:error});
        next();
    }
};