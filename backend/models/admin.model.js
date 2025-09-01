
const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema(
    {
        
        email: {
            type: String,
            required: true,
            validate: {
              validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
              },
              message: 'Invalid email address format',
            },
            unique:true
          },
          password: {
            type : String,
            required:true
          }
    }
)

const admin = mongoose.model('admin',adminSchema)
module.exports = admin
