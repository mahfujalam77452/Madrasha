const asyncHandler = require("../utils/asyncHandler.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const Teacher = require("../models/teachers.model.js")
const fs = require('fs').promises;

const addTeacher = asyncHandler(
    async (req,res) => {
        const localFilePath = req.file.path;
        const response = await uploadOnCloudinary(localFilePath);

          // Clean up local file
                try {
                   await fs.unlink(localFilePath);
                } catch (err) {
                   console.error("Error deleting local file:", err);
                }

  if (response.url) {
   
    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newTeacher = new Teacher(
        req.body
    );
    
   newTeacher.image = response.url

    try {
      const doc = await newTeacher.save();
      res.status(201).json({
        message: "Teacher successfully added",
        document: doc,
      });
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while saving data to the database",
        error: err,  // Log the actual error message
      });
    }
  } else {
    res.status(500).json({
      message: "An error occurred while uploading the image to Cloudinary",
      error: response.error || "Unknown error",
    });
  }
    }
)

module.exports = addTeacher;