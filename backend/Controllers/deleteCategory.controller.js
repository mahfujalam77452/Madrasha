const asyncHandler = require("../utils/asyncHandler.js")
const Category = require("../models/category.model.js")

const deleteCategory= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedCategory= await Category.findOneAndDelete({ _id: req.params.id });
        
            if (deletedCategory) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedCategory,
              });
            } else {
              return res.status(404).json({
                message: 'Category not found with the given info.',
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


module.exports = deleteCategory