const asyncHandler = require("../utils/asyncHandler.js")
const Department = require("../models/department.model.js")

const getDepartment = asyncHandler(
    async(req,res) => {
        
        try {
            const Departments = await Department.find();
             
            if (Departments) {
              return res.status(200).json({
                message: 'success',
                data: Departments,
              });
            } else {
              return res.status(404).json({
                message: 'Department can not  be abstructed',
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


module.exports = getDepartment