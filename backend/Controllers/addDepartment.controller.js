const asyncHandler = require("../utils/asyncHandler.js");
const Department = require("../models/department.model.js")

const addDepartment = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newDepartment = new Department(
        req.body
    );
    
    
   

    try {
      const doc = await newDepartment.save();
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
  
}
)

module.exports = addDepartment;