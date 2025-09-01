const asyncHandler = require("../utils/asyncHandler.js")
const Picture = require("../models/picture.model.js")

const deletePicture = asyncHandler(
    async(req,res) => {
        
        try {
            const deletedPicture = await Picture.findOneAndDelete({ _id: req.params.id });
        
            if (deletedPicture) {
              return res.status(200).json({
                message: 'success',
                Picture: deletedPicture,
              });
            } else {
              return res.status(404).json({
                message: 'Picture not found with the given info.',
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


module.exports = deletePicture