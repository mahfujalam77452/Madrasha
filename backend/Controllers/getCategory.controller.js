const asyncHandler = require("../utils/asyncHandler.js")
const Category = require("../models/category.model.js")

const getCategory = asyncHandler(
    async(req,res) => {
        
        try {
            const Categorys = await Category.find();
             
            if (Categorys) {
              return res.status(200).json({
                message: 'success',
                data: Categorys,
              });
            } else {
              return res.status(404).json({
                message: 'Category can not  be abstructed',
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


module.exports = getCategory