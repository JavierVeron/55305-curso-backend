import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const estudianteSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    gender:String,
    grade:Number,
    group:String
});

estudianteSchema.plugin(mongoosePaginate);

const estudianteModel = mongoose.model("estudiantes", estudianteSchema);

export default estudianteModel;