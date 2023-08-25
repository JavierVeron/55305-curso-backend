import mongoose from "mongoose";
//import orderModel from "./models/order.model.js";
import estudianteModel from "./models/estudiante.model.js";

const enviroment = async () => {
    mongoose.connect("mongodb+srv://CoderJavier:Javier123!@codercluster.rnwzt3p.mongodb.net/test?retryWrites=true&w=majority");

    // Cargar de documentos en nuestra collection Orders
    /* let orders = await orderModel.insertMany([
        {name:"Muzzarella", size:"M", price:3650, quantity:10, date:"2023-08-24"},
        {name:"Muzzarella", size:"L", price:3750, quantity:10, date:"2023-08-24"},
        {name:"Muzzarella", size:"XL", price:3850, quantity:10, date:"2023-08-24"},
        {name:"Doble muzzarella", size:"L", price:5500, quantity:9, date:"2023-08-24"},
        {name:"Muzzarella con jamón", size:"M", price:5570, quantity:8, date:"2023-08-24"},
        {name:"Jamón con morrones", size:"M", price:5170, quantity:7, date:"2023-08-24"},
        {name:"Jamón con morrones", size:"L", price:5570, quantity:5, date:"2023-08-24"},
        {name:"Jamón con palmitos", size:"XL", price:6980, quantity:6, date:"2023-08-24"},
        {name:"Napolitana", size:"M", price:6250, quantity:5, date:"2023-08-24"},
        {name:"Napolitana", size:"L", price:6550, quantity:6, date:"2023-08-24"},
        {name:"Napolitana", size:"XL", price:6750, quantity:7, date:"2023-08-24"}
    ]);
    console.log(orders); */

    // Primer ejemplo de Aggregate
    /* let orders = await orderModel.aggregate([
        {
            $match:{size:"M"}
        },
        {
            $group:{_id:"$name", stock:{$sum:"$quantity"}}
        },
        {
            $sort:{stock:-1}
        },
        {
            $group:{_id:1, orders:{$push:"$$ROOT"} }
        },
        {
            $project:{"_id":0, orders:"$orders"}
        },
        {
            $merge:{into:"reports"}
        }
    ]);
    console.log(orders); */


    // Desafio estudiantes
    /* for (let i=1; i<=10; i++) {
        let grade = Math.round(Math.random() * 10);
        await estudianteModel.create({name:"Nombre"+i, lastname:"Apellido"+i, email:"email"+i+"@gmail.com", gender:((i%2)==0 ? "M" : "F"), grade:grade, group:((i%2)==0 ? "1A" : "1B")});
    } */
    // Consulta #1
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $group:{_id:"$name", stock:{$sum:"$grade"}}
        },
        {
            $sort:{grade:-1}
        }
    ]);
    console.log(estudiantes); */
    // Consulta #2
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $group:{_id:"$group", total:{$count:{}}}
        },
    ]);
    console.log(estudiantes); */
    // Consulta #3
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $match:{group:"1B"}
        },
        {
            $group:{_id:"$group", total:{$avg:"$grade"}}
        },
    ]);
    console.log(estudiantes); */
    // Consulta #4
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $match:{group:"1A"}
        },
        {
            $group:{_id:"$group", total:{$avg:"$grade"}}
        },
    ]);
    console.log(estudiantes); */
    // Consulta #5
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $group:{_id:{}, total:{$avg:"$grade"}}
        },
    ]);
    console.log(estudiantes); */
    // Consulta #6
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $match:{gender:"M"}
        },
        {
            $group:{_id:"$gender", total:{$avg:"$grade"}}
        },
    ]);
    console.log(estudiantes); */
    // Consulta #7
    /* let estudiantes = await estudianteModel.aggregate([
        {
            $match:{gender:"F"}
        },
        {
            $group:{_id:"$gender", total:{$avg:"$grade"}}
        },
    ]);
    console.log(estudiantes); */

    let estudiantes = await estudianteModel.paginate({gender:"F"}, {page:2, limit:3});
    //console.log(estudiantes);
    console.log("Total de Resultados: " + estudiantes.totalDocs);
    console.log("Límite: " + estudiantes.limit);
    console.log("Página: " + estudiantes.page);
}

enviroment();