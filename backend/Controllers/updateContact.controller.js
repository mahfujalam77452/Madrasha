const asyncHandler = require("../utils/asyncHandler.js");
const Contact = require("../models/contact.model.js")

const addContact = asyncHandler(
    
   async (req,res) => {

    if (!req.body) {
      return res.status(400).json({
        message: "Required information is not available",
      });
    }

    
    
    const query = { mobile:req.body.oldMobile,email:req.body.oldEmail }; // Find the student by rollNumber
    const update = { 
       mobile: req.body.newMobile, 
       email: req.body.newEmail 
    }; // Fields to update
    const options = { new: true }; // Return the updated document
   

    try {
    
    const updatedContact = await Contact.findOneAndUpdate(query, update, options);

      res.status(201).json({
        message: "Contact successfully updated",
        data: updatedContact,
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