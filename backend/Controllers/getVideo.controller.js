const asyncHandler = require("../utils/asyncHandler.js")
const Video = require("../models/videoInfo.model.js")

const getVideo = asyncHandler(
    async(req,res) => {
        
        try {
            const Videos = await Video.find();
        
            if (Videos) {
              return res.status(200).json({
                message: 'success',
                data: Videos,
              });
            } else {
              return res.status(404).json({
                message: 'Video can not  be abstructed',
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


module.exports = getVideo