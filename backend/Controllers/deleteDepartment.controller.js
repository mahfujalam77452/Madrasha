const asyncHandler = require("../utils/asyncHandler.js")
const Department = require("../models/department.model.js")

const deleteDepartment= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedDepartment= await Department.findOneAndDelete({ _id: req.params.id });
        
            if (deletedDepartment) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedDepartment,
              });
            } else {
              return res.status(404).json({
                message: 'Department not found with the given info.',
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


module.exports = deleteDepartment