import CustomRouter from "./custom.router.js";

export default class UsersRouter extends CustomRouter {
    init() {
        /* this.get("/", (req, res) => {
            res.sendSuccess("Hola Coders!");
        }) */

        this.get("/", ["PUBLIC"], (req, res) => {
            res.sendSuccess("Hola Coders!");
        });

        this.get("/currentUser", ["USER", "USER_PREMIUM"], (req, res) => {
            res.sendSuccess(req.user);
        })
    }
} 