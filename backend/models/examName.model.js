const mongoose = require("mongoose");
const { Schema } = mongoose;

const examNameSchema = new Schema(
    {
         examName:{
            type:String,
            requred:true,
            unique:true
        },
        
    }
)

const examName = mongoose.model('examName',examNameSchema)

module.exports = examName;