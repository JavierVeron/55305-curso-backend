import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    phone:String,
    active:Boolean
});

export const contactsModel = mongoose.model("contacts", contactsSchema);