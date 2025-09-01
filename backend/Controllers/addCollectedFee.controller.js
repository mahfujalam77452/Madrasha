const asyncHandler = require("../utils/asyncHandler.js");
const CollectedFee = require("../models/collectedFee.model.js")

const addCollectedFee = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newCollectedFee = new CollectedFee(
        req.body
    );
    
    
   

    try {
      const doc = await newCollectedFee.save();
      res.status(201).json({
        message: "CollectedFee successfully added",
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

module.exports = addCollectedFee;