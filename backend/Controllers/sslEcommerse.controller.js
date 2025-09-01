const asyncHandler = require("../utils/asyncHandler.js");
const AddedFee = require("../models/addedFee.model.js")
const collectedFee = require("../models/collectedFee.model.js")
const SSLCommerzPayment = require('sslcommerz-lts')
const { Types } = require('mongoose')



const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWORD
const is_live = false 



const sslComm = asyncHandler(
   async (req,res) => {
        const Tran_id = new Types.ObjectId().toString();
        const Fee = await AddedFee.findOne({section:req.body.section,session:req.body.session,department:req.body.department,forWhich:req.body.forWhich});
        req.body.transection_id = Tran_id;


        if(!Fee){
          return  res.status(400).json(
                {
                    message:"Wrong Info or It is not the actual time for make this payment"
                }
            )
        }
        
        const addcollection = new collectedFee(req.body);

        try{
            addcollection.save()
        }
        catch(err){
            return  res.status(400).json(
                {
                    message:"Something went wrong . Try again !"
                }
            )
        }

        const Amount = Fee.fee;
        
        const data = {
            total_amount: Amount,
            currency: 'BDT',
            tran_id: Tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:8080/api/v1/user/payment/success/${Tran_id}`,
            fail_url: `http://localhost:8080/api/v1/user/payment/fail/${Tran_id}`,
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            return res.send({url:GatewayPageURL})
           
        });
    }
)

module.exports = sslComm