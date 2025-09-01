const asyncHandler = require("../utils/asyncHandler.js")
const AddedFee = require("../models/addedFee.model.js")

const deleteAddedFee = asyncHandler(
    async(req,res) => {
        
        try {
            const deletedAddedFee = await AddedFee.findOneAndDelete({ _id: req.params.id });
        
            if (deletedAddedFee) {
              return res.status(200).json({
                message: 'success',
                AddedFee: deletedAddedFee,
              });
            } else {
              return res.status(404).json({
                message: 'AddedFee not found with the given info.',
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


module.exports = deleteAddedFee