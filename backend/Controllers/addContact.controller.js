const asyncHandler = require("../utils/asyncHandler.js");
const Contact = require("../models/contact.model.js")

const addContact = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    const newContact = new Contact(
        req.body
    );
    
    
   

    try {
      const doc = await newContact.save();
      res.status(201).json({
        message: "Contact successfully added",
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

module.exports = addContact;