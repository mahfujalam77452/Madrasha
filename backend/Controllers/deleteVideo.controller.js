const asyncHandler = require("../utils/asyncHandler.js")
const Video = require("../models/videoInfo.model.js")

const deleteVideo= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedVideo= await Video.findOneAndDelete({_id:req.params.id});
        
            if (deletedVideo) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedVideo,
              });
            } else {
              return res.status(404).json({
                message: 'Video not found with the given info.',
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


module.exports = deleteVideo