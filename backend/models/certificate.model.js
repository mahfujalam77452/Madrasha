const mongoose = require("mongoose");
const {Schema} = mongoose;

const certificateSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        rollNumber:{
            type:String,
            required:true,
        },
        section:{
            type:String,
            required:true,
        },
        session:{
            type:String,
            required:true
        }
        ,
        department:{
            type:String,
            required:true,
        },
        examName:{
            type:String,
            required:true,
        },
        certificate:{
            type:String,
            required:true
        }
    }
)

const certificate = mongoose.model("certificate",certificateSchema);

module.exports = certificate;