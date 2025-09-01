const asyncHandler = require("../utils/asyncHandler.js")
const Routine = require("../models/routine.model.js")

const getAllRoutine = asyncHandler(
    async(req,res) => {
        
        try {
            const RoutineItems = await Routine.find();
             
            if (RoutineItems) {
              return res.status(200).json({
                message: 'success',
                data: RoutineItems,
              });
            } else {
              return res.status(404).json({
                message: 'Routine can not  be abstructed',
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


module.exports = getAllRoutine