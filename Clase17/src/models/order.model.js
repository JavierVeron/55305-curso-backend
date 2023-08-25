import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name:String,
    size:{type:String, enum:["M", "L", "XL"], default:"M"},
    price:Number,
    quantity:Number,
    date:Date 
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;