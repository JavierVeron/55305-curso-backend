const handlepolicies = (policies) => (req, res, next) => {
    if (policies[0] == "PUBLIC") {
        next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({status:"error", message:"No se envió el Token!"});
    }

    const token = authHeader;

    let user = jwt.verify(token, "coderSecret");
    
    if (!policies.includes(user.role.toUpperCase())) {
        return res.status(401).send({status:"error", message:"No autorizado!"});
    }
    
    req.user = user;
    next();
}