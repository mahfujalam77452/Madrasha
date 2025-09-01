const asyncHandler = require("../utils/asyncHandler.js");
const Category = require("../models/category.model.js")

const addCategory = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newCategory = new Category(
        req.body
    );
    
    
   

    try {
      const doc = await newCategory.save();
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

module.exports = addCategory;