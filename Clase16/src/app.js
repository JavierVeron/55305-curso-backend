//import {userModel} from "./models/user.model.js";
import {studentModel} from "./models/student.model.js";
import {courseModel} from "./models/course.model.js";
import mongoose from "mongoose";

const enviroment = async () => {
    mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/test?retryWrites=true&w=majority");
    /* let response = await userModel.find().explain('executionStats');
    console.log(response); */

    /* await userModel.create({nombre:"Roberto", apellido:"Torales", email:"soyrobert@gmail.com", genero:"M"});
    console.log("Usuarie creade!"); */

    /* let response = await userModel.find({nombre:"Roberto"}).explain('executionStats');
    console.log(response); */

    // Creamos el documento para Students
    //await studentModel.create({name:"Mariel", lastname:"Boher", email:"mariel.boher@gmail.com", gender:"Female"});
    //await studentModel.create({name:"Juan Pablo", lastname:"Ciceri", email:"juanpiciceri@gmail.com", gender:"Male"});

    // Creamos el documento para Courses
    //await courseModel.create({title:"JavaScript", description:"Curso de JS en Coderhouse", professor:"Karen Simari"});

    // Actualizar el documento de un Student con el Id de un Course
    /* let student = await studentModel.findOne({_id:"64e5599b9cc36d6848e7c958"});
    student.courses.push({course:"64e55ae965318f6208ec4043"});
    await studentModel.updateOne({_id:"64e5599b9cc36d6848e7c958"}, student);
    console.log("Alumne actualizade!"); */

    // Consultar el Student actualizado con populate!
    //let student = await studentModel.findOne({_id:"64e5599b9cc36d6848e7c958"});
    /* let student = await studentModel.findOne({_id:"64e5599b9cc36d6848e7c958"}).populate("courses.course");
    console.log(JSON.stringify(student, null, "\t")); */

    // Consultar el Student con el populate incorporado en el Schema
    let student = await studentModel.find({_id:"64e5599b9cc36d6848e7c958"});
    console.log(JSON.stringify(student, null, "\t"));
}

enviroment();