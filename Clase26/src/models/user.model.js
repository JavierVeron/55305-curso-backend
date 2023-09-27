class UserModel {
    constructor() {
        this.users = [];
    }

    getUsers = () => {
        return this.users;
    }

    addUser = (user) => {
        return this.users.push(user);
    }
}

export default UserModel;