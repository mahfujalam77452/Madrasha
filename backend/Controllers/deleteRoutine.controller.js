const asyncHandler = require("../utils/asyncHandler.js")
const Routine = require("../models/routine.model.js")

const deleteRoutine= asyncHandler(
    async(req,res) => {
        
        try {
            const deletedRoutine= await Routine.findOneAndDelete({ _id: req.params.id });
        
            if (deletedRoutine) {
              return res.status(200).json({
                message: 'success',
                Teacher: deletedRoutine,
              });
            } else {
              return res.status(404).json({
                message: 'Routine not found with the given info.',
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


module.exports = deleteRoutine