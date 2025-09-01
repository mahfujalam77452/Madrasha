const asyncHandler = require("../utils/asyncHandler.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const Result = require("../models/result.model.js")
const fs = require('fs').promises;

const addResult = asyncHandler(
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

    const newResult = new Result(
        req.body
    );
    
   newResult.result = response.url

    try {
        const doc = await newResult.save();
        res.status(201).json({
        message: "success",
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

module.exports = addResult;