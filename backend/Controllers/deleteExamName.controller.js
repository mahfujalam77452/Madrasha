const asyncHandler = require("../utils/asyncHandler.js")
const ExamName = require("../models/examName.model.js")

const deleteExamName= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedExamName= await ExamName.findOneAndDelete({ _id: req.params.id });
        
            if (deletedExamName) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedExamName,
              });
            } else {
              return res.status(404).json({
                message: 'ExamName not found with the given info.',
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


module.exports = deleteExamName