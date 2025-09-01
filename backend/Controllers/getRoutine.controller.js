const asyncHandler = require("../utils/asyncHandler.js")
const Routine = require("../models/routine.model.js")

const getRoutine = asyncHandler(
    async(req,res) => {
        
        try {
            const RoutineItem = await Routine.findOne(req.body);
             
            if (RoutineItem) {
              return res.status(200).json({
                message: 'success',
                data: RoutineItem.routineFile,
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


module.exports = getRoutine