import CustomRouter from "./custom.router.js";
import jwt from "jsonwebtoken";

export default class SessionsRouter extends CustomRouter {
    init() {
        this.post("/login", ["PUBLIC"], (req, res) => {
            let user = {email:req.body.email, role:"user"};
            let token = jwt.sign(user, "coderSecret");
            res.sendSuccess({token});
        });
    }
} 