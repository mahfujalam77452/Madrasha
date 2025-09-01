const mongoose = require("mongoose");
const { Schema } = mongoose;

const PictureSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      index:true
    },
    image: {
      type: String,
      required: true,
    },
  }
);

// Use module.exports to export the model
const Picture = mongoose.model("Picture", PictureSchema, "pictures");

module.exports = Picture;  // Correct export
