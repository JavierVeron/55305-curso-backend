import { Router } from "express";
import jwt from "jsonwebtoken";

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

    get(path, policies, ...callbacks) {
        this.router.get(path, this.handlepolicies(policies), this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    post(path, policies, ...callbacks) {
        this.router.post(path, this.handlepolicies(policies), this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    put(path, policies, ...callbacks) {
        this.router.put(path, this.handlepolicies(policies), this.generateCustomReponses, this.applyCallbacks(callbacks));
    }

    delete(path, policies, ...callbacks) {
        this.router.delete(path, this.handlepolicies(policies), this.generateCustomReponses, this.applyCallbacks(callbacks));
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

    handlepolicies = (policies) => (req, res, next) => {
        if (policies[0] === "PUBLIC") {
            return next();
        }
    
        const authHeader = req.headers.authorization;
    
        if (!authHeader) {
            return res.status(401).send({status:"error", message:"No se envió el Token!"});
        }

        const token = authHeader.split(" ")[1];
        //const token = authHeader;
    
        let user = jwt.verify(token, "coderSecret");

        if (!user) {
            return res.status(403).send({status:"error", message:"Token no válido!"});
        }
        
        if (!policies.includes(user.role.toUpperCase())) {
            return res.status(403).send({status:"error", message:"No autorizado!"});
        }
        
        req.user = user;
        next();
    }
};