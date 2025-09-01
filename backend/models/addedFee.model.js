const mongoose = require("mongoose");
const {Schema} = mongoose;

const addedFeeSchema = new Schema(
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
        forWhich:{
            type:String,
            required:true,
        },
        fee:{
            type:Number,
            min: [1, 'Amount should be geater then 1'],
            required:true
        }
    }
)

const addedFee = mongoose.model("addedFee",addedFeeSchema);

module.exports = addedFee;