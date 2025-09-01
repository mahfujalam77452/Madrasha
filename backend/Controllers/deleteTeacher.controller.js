const asyncHandler = require("../utils/asyncHandler.js")
const Teacher = require("../models/teachers.model.js")

const deleteTeacher = asyncHandler(
    async(req,res) => {
        
        try {
            const deletedTeacher = await Teacher.findOneAndDelete({ _id: req.params.id });
        
            if (deletedTeacher) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedTeacher,
              });
            } else {
              return res.status(404).json({
                message: 'Teacher not found with the given info.',
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


module.exports = deleteTeacher