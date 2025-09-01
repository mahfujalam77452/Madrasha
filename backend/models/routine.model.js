const mongoose = require("mongoose");
const examName = require("./examName.model");
const { Schema } = mongoose;


const routineSchema = new Schema(
    {
       section:{
        type:String,
        required:true
       },
       session:{
        type:String,
        required:true
       },
       department:{
        type:String,
        required:true
       },
       forWhich:{
        type:String,
        required:true
       },
       examName:{
        type:String,
        default:""
       }
       ,
       routineFile:{
        type:String,
        required:true
       },
       date:{
        type:Date,
        required:true
       }
    }
)

const Routine  = mongoose.model('routine',routineSchema)

module.exports = Routine