import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    professor:String    
});

export const courseModel = mongoose.model("courses", courseSchema);