import CustomRouter from "./custom.router.js";

export default class UsersRouter extends CustomRouter {
    init() {
        this.get("/", (req, res) => {
            res.sendSuccess("Hola Coders!");
        })
    }
} 