const asyncHandler = require("../utils/asyncHandler.js")
const Teacher = require("../models/teachers.model.js")

const getTeacher = asyncHandler(
    async(req,res) => {
        
        try {
            const Teachers = await Teacher.find();
        
            if (Teachers) {
              return res.status(200).json({
                message: 'success',
                data: Teachers,
              });
            } else {
              return res.status(404).json({
                message: 'Teacher can not  be abstructed',
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


module.exports = getTeacher