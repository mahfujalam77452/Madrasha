const mongoose = require("mongoose");
const { Schema } = mongoose;

const departmentSchema = new Schema(
    {
         department:{
            type:String,
            requred:true,
            unique:true
        },
        
    }
)

const department = mongoose.model('department',departmentSchema)

module.exports = department