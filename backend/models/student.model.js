const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
    {
        section:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        rollNumber:{
            type: Number,
            required: true,
            index:true
        },
        department:{
            type: String,
            required: true,
        },
        session:{
            type: String,
            required: true,
        },
        picture:{
            type: String,
            required: true,
        },
        addFee:{
            type:Boolean,
            default :false,
            required:true

        }
    }
)

const student = mongoose.model("student",studentSchema);

module.exports= student