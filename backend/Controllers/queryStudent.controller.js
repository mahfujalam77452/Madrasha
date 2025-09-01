const asyncHandler = require("../utils/asyncHandler.js")
const Student = require("../models/student.model.js")



  const findStudent = asyncHandler(
    async (req,res) => {
        
      

       const query = {
        
        ...(req.body.section && { section: req.body.section }),
        ...(req.body.department && { department: req.body.department }),
        ...(req.body.session && { session: req.body.session }),
        
      };
      
       
      try{
        const results = await Student.find(query).sort({rollNumber:1});

          res.status(200).json(
            {
                message:"Student extracted successfully !",
                data : results
            }
          )
      }
      catch(err){
        res.status(500).json(
            {
                message:"Server side error . Try again !",
                
            }
          )
      }
    }
  )

  module.exports = findStudent;