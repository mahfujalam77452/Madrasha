const asyncHandler = require("../utils/asyncHandler.js")
const ExamName = require("../models/examName.model.js")

const getExamName = asyncHandler(
    async(req,res) => {
        
        try {
            const ExamNames = await ExamName.find();
             
            if (ExamNames) {
              return res.status(200).json({
                message: 'success',
                data: ExamNames,
              });
            } else {
              return res.status(404).json({
                message: 'ExamName can not  be abstructed',
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


module.exports = getExamName