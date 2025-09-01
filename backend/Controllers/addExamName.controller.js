const asyncHandler = require("../utils/asyncHandler.js");
const ExamName = require("../models/examName.model.js")

const addExamName = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newExamName = new ExamName(
        req.body
    );
    
    
   

    try {
      const doc = await newExamName.save();
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

module.exports = addExamName;