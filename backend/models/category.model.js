const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
         category:{
            type:String,
            requred:true,
            unique:true
        },
        
    }
)

const category = mongoose.model('category',categorySchema)

module.exports = category