import jwt from "jsonwebtoken";

const PRIVATE_KEY = "S3CR3T0";

export const generateToken = (user) => {
    const token = jwt.sign({user}, PRIVATE_KEY, {expiresIn:"24h"});

    return token;
}

export const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).send({status:"error", message:"No se envió el Token!"});
    }

    //const token = authHeader.split(" ")[1];
    const token = authHeader;

    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if (error) {
            res.status(401).send({status:"error", message:"No autorizado!"});
        }

        req.user = credentials.user;
        next();
    });
}