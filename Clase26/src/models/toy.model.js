class ToyModel {
    constructor() {
        this.toys = [];
    }

    getToys = () => {
        return this.toys;
    }

    addToy = (toy) => {
        return this.toys.push(toy);
    }
}

export default ToyModel;