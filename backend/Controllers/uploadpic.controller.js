const asyncHandler = require("../utils/asyncHandler.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const Picture = require("../models/picture.model.js");
const fs = require("fs").promises; // Ensure fs is imported

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded!" });
  }

  console.log("Uploaded file:", req.file);

  const localFilePath = req.file.path;
  const response = await uploadOnCloudinary(localFilePath);

  // Delete local file after upload
  try {
    await fs.unlink(localFilePath);
  } catch (err) {
    console.error("Error deleting local file:", err);
  }

  if (response.url) {
    const { category } = req.body;
    if (!category) {
      return res.status(400).json({ message: "Category is required." });
    }

    const newPicture = new Picture({
      category,
      image: response.url,
    });

    try {
      const doc = await newPicture.save();
      res.status(201).json({
        message: "Image successfully added",
        document: doc,
      });
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while saving data to the database",
        error: err.message,
      });
    }
  } else {
    res.status(500).json({
      message: "An error occurred while uploading the image to Cloudinary",
      error: response.error || "Unknown error",
    });
  }
});

module.exports = uploadImage;
