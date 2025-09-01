const asyncHandler = require("../utils/asyncHandler.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const Notice = require("../models/notice.model.js")
const fs = require("fs/promises");

const addNotice = asyncHandler(
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

    const newNotice = new Notice(
        req.body
    );
    
   newNotice.notice_link = response.url

    try {
      const doc = await newNotice.save();
      res.status(201).json({
        message: "Notice successfully added",
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

module.exports = addNotice;