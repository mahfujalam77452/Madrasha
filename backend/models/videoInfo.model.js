const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoInfoSchema = new Schema(
    {
        videoLink:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        date:{
            type:Date,
            required:true
        }
    }
)

const videoInfo = mongoose.model('videoInfo',videoInfoSchema);

module.exports = videoInfo;