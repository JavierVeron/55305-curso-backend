import UserModel from "../models/user.model.js";

class UserService {
    constructor() {
        this.userModel = new UserModel();
    }

    getAllUsers = () => {
        return {code:200, status:"ok", users:this.userModel.getUsers()};
    }
    
    addUser = (user) => {
        if (user.name.length < 3) {
            return {code:401, status:"error", message:"Error! La longitud del Nombre es menor a 3 caracteres!"};
        }

        if (!user.email.includes("@")) {
            return {code:401, status:"error", message:"Error! El email no contiene un @!"};
        }

        let result = this.userModel.addUser(user);

        if (result > 0) {
            return {code:200, status:"ok", message:"El Usuario se agregó correctamente!"};
        }
    }
}

export default UserService;