const asyncHandler = require("../utils/asyncHandler.js");
const Donation = require("../models/donation.model.js")

const addDonation = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newDonation = new Donation(
        req.body
    );
    
    
   

    try {
      const doc = await newDonation.save();
      res.status(201).json({
        message: "Donation successfully added",
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

module.exports = addDonation;