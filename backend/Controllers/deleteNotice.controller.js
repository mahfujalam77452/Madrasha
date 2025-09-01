const asyncHandler = require("../utils/asyncHandler.js")
const Notice = require("../models/notice.model.js")

const deleteNotice= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedNotice= await Notice.findOneAndDelete({_id:req.params.id});
        
            if (deletedNotice) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedNotice,
              });
            } else {
              return res.status(404).json({
                message: 'Notice not found with the given info.',
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


module.exports = deleteNotice