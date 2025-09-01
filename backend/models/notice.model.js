const mongoose = require("mongoose");
const { Schema } = mongoose;

const noticeSchema = new Schema(
    {
        notice_link:{
            type:String,
            requred:true
        },
        notice_title:{
            type:String,
            required:true,

        },
        notice_date:{
            type:String,
            requred:true
        }
    }
)

const notice = mongoose.model('notice',noticeSchema)

module.exports = notice