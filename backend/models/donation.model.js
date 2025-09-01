const mongoose = require("mongoose");
const { Schema } = mongoose;


const donationSchema = new Schema(
    {
        donatedAmount:{
            type:Number,
            min:1,
            required:true
        },
        name:{
            type:String
        },
        mobileOrEmail:{
            type:String,
            required:true
        },
        sector:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
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

const donation = mongoose.model('donation',donationSchema)

module.exports = donation