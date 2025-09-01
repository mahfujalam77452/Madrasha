const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        mobile:{
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true,
            validate: {
              validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
              },
              message: 'Invalid email address format',
            },
          }
    }
)

const contact = mongoose.model('contact',contactSchema)
module.exports = contact
