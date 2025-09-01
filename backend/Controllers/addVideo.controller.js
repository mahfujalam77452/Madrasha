const asyncHandler = require("../utils/asyncHandler.js");
const Video = require("../models/videoInfo.model.js")

const addVideo = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newVideo = new Video(
        req.body
    );
    
   

    try {
      const doc = await newVideo.save();
      res.status(201).json({
        message: "Video successfully added",
        document: doc,
      });
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while saving data to the database",
        error: err,  // Log the actual error message
      });
    }
  
}
)

module.exports = addVideo;