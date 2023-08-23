import mongoose from "mongoose";
import populate from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    gender:String,
    courses:{
        type:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"courses"
                }
            }
        ]
    }
});

studentSchema.pre("find", function() {
    this.populate("courses.course");
});

export const studentModel = mongoose.model("students", studentSchema);