const asyncHandler = require("../utils/asyncHandler.js")
const Donation = require("../models/donation.model.js")

function getDateBeforeNDays(dateString, n) {
    // Parse the input date string
    const inputDate = new Date(dateString);
   
    // Subtract n days
    inputDate.setDate(inputDate.getDate() - n);
  
    // Format the result as YYYY-MM-DD
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(inputDate.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  const findDonation = asyncHandler(
    async (req,res) => {
        
        const days = +req.body.day;
        let lastElement
        try { 
             lastElement = await Donation.findOne().sort({ _id: -1 }); 
            // You can add further logic here if needed res.status(200).json(lastElement); 
            
            } catch (error)
             { console.error('Error fetching the last element:', error);
                 res.status(500).json({ message: 'Error fetching the last element',
                                       error: error.message });
            }
      if(!lastElement){
            res.status(300).json({ message: 'No Donation avaiable',
            error: error.message });
      }
       
       const startDate = new Date(lastElement.date);
       const endDate = new Date(getDateBeforeNDays(lastElement.date,days));
       
      try{
        const results = await Donation.find({
            date: {
              $gte: endDate, // Greater than or equal to startDate
              $lte: startDate    // Less than or equal to endDate
            },
            paymentStatus:true,
            ...(req.body.sector && { sector: req.body.sector })
          });

          res.status(200).json(
            {
                message:"success",
                data : results
            }
          )
      }
      catch(err){
        res.status(500).json(
            {
                message:"Server side error . Try again !",
                
            }
          )
      }
    }
  )

  module.exports = findDonation;