const asyncHandler = require("../utils/asyncHandler.js")
const AddedFee = require("../models/addedFee.model.js")

const getAddedFee = asyncHandler(
    async(req,res) => {
        
        try {
            const AddedFees = await AddedFee.find(req.body);
        
            if (AddedFees) {
              return res.status(200).json({
                message: 'success',
                data: AddedFees,
              });
            } else {
              return res.status(404).json({
                message: 'AddedFee can not  be abstructed',
              });
            }
          } catch (error) {
          
            return res.status(500).json({
              message: 'Internal Server Error try again !',
              error: error.message,
            });
          }

    }
)


module.exports = getAddedFee