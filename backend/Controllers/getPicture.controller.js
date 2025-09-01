const asyncHandler = require("../utils/asyncHandler.js")
const Picture = require("../models/picture.model.js")

const getPicture = asyncHandler(
    async(req,res) => {
        
        try {
            const Pictures = await Picture.find();
        
            if (Pictures) {
              return res.status(200).json({
                message: 'success',
                data: Pictures,
              });
            } else {
              return res.status(404).json({
                message: 'Picture can not  be abstructed',
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


module.exports = getPicture