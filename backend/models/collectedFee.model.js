const { required } = require("joi");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const collectedFeeSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        roll:{
            type:Number,
            min:1,
            required:true
        },
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
        date:{
            type: Date,
            required:true,
        },
        transection_id:{
            type:String,
            unique:true,
            required:true
        },
        paymentStatus:{
            type:Boolean,
            default:false,
            required:true
        }
    }
)

const collectedFee = mongoose.model("collectedFee",collectedFeeSchema);
module.exports = collectedFee;