import mongoose from "mongoose";

const userCollection = "usuarios";

const userSchema = new mongoose.Schema({
    nombre:{type:String, index:true},
    apellido:String,
    email:String,
    genero:String
});

export const userModel = mongoose.model(userCollection, userSchema);