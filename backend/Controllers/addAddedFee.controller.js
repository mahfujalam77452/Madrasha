const asyncHandler = require("../utils/asyncHandler.js");
const AddedFee = require("../models/addedFee.model.js")

const addAddedFee = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newAddedFee = new AddedFee(
        req.body
    );
    
    
   

    try {
      const doc = await newAddedFee.save();
      res.status(201).json({
        message: "AddedFee successfully added",
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

module.exports = addAddedFee;