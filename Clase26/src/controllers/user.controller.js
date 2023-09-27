import UserService from "../services/user.service.js";

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    getUsers = async (req, res) => {
        let result = this.userService.getAllUsers();
        res.status(result.code).send({status:result.status, users:result.users});
    }

    addUser = async (req, res) => {
        const {name, email} = req.body;
        let result = this.userService.addUser({name, email});
        res.status(result.code).send({status:result.status, message:result.message});
    }
}

export default UserController;