const mongoose = require("mongoose");
const {Schema} = mongoose;

const resultSchema = new Schema(
    {
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
        result:{
            type:String,
            required:true
        }
    }
)

const result = mongoose.model("result",resultSchema);

module.exports = result;