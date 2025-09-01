const asyncHandler = require("../utils/asyncHandler.js")
const Notice = require("../models/notice.model.js")

const getNotice = asyncHandler(
    async(req,res) => {
        
        try {
            const Notices = await Notice.find();
             
            if (Notices) {
              return res.status(200).json({
                message: 'success',
                data: Notices,
              });
            } else {
              return res.status(404).json({
                message: 'Notice can not  be abstructed',
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


module.exports = getNotice