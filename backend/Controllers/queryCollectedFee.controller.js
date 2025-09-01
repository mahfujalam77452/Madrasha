const asyncHandler = require("../utils/asyncHandler.js")
const CollectedFee = require("../models/collectedFee.model.js")



  const findCollectedFee = asyncHandler(
    async (req,res) => {
        
       const startDate = new Date(req.body.startDate);
       startDate.setDate(startDate.getDate() - 1);
       const endDate = new Date(req.body.endDate);
       endDate.setDate(endDate.getDate() + 1);
      
       const query = {
        date: {
          $gte: startDate,
          $lte: endDate
        },
        ...(req.body.section && { section: req.body.section }),
        ...(req.body.session && { session: req.body.session }),
        ...(req.body.department && { department: req.body.department }),
        ...(req.body.forWhich && { forWhich: req.body.forWhich }),
        
      };
      
       
      try{
        const results = await CollectedFee.find(query);

          res.status(200).json(
            {
                message:"success",
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

  module.exports = findCollectedFee;