const asyncHandler = require("../utils/asyncHandler.js")
const Student = require("../models/student.model.js")

const deleteStudent= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedStudent= await Student.findOneAndDelete({ _id: req.params.id });
        
            if (deletedStudent) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedStudent,
              });
            } else {
              return res.status(404).json({
                message: 'Student not found with the given info.',
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


module.exports = deleteStudent