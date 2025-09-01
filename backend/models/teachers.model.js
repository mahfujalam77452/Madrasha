const mongoose = require("mongoose");
const { Schema } = mongoose

const teacherSchema = new Schema(
    {
        fullName:{
            type: String,
            required: true
        },
        designation:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        }
    }
)


const teacher = mongoose.model('teacher',teacherSchema);

module.exports = teacher