const mongoose = require("mongoose");
const { Schema } = mongoose;

const admitCardSchema = new Schema(
    {
        
        name:{
            type: String,
            required: true,
        },
        rollNumber:{
            type: Number,
            required: true,
            index:true
        },
        section:{
            type: String,
            required: true,
        },
        session:{
            type: String,
            required: true,
        },
        department:{
            type: String,
            required: true,
        },
        admitCard:{
            type: String,
            required: true,
        }
    }
)

const admitCard = mongoose.model("admitCard",admitCardSchema);

module.exports= admitCard