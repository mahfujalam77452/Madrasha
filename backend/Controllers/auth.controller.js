const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin.model.js')


const signUp = async (req,res) => {

   try{
    const {email,password} = req.body;
    const isAdmin = await Admin.findOne({email});

    if(isAdmin){
        return res.status(409)
             .json({message: 'User is already exist, you can login',success:false});

    }

    const adminModel = new Admin({email,password});

    adminModel.password = await bcrypt.hash(password,10);
    await adminModel.save();

    res.status(201)
        .json(
            {
                message:'SingnUp successfully',
                success:true
            }
        )
   }
     catch(err) {
        res.status(500)
            .json(
                {
                    message: "Internal server error",
                    success: false
                }
            )
     }

}

const logIn = async (req,res) => {
    try{
        const {email,password} = req.body;

        const  admin = await Admin.findOne({email});

        const errorMsg = 'Auth failed email or password is wrong';

        if(!admin){
            return res.status(403)
                  .json({message: errorMsg,success:false});
        }

        const isPassEqual = await bcrypt.compare(password,admin.password);

        if(!isPassEqual){
            return res.status(403)
                 .json({message:errorMsg,success:false})
        }

        const jwtToken = jwt.sign(
            { email: admin.email, _id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json(
                {
                    message:"Login Success",
                    success: true,
                    jwtToken,
                    email,
                    name: admin.name
                }
            )
    }
    catch(err) {
        res.status(500)
          .json(
            {
                message:"Internal server error",
                success:false
            }
          )
    }
}

const changePassword = async (req,res) => {
    try{
        const {email,password,newPassword,confirmPassword} = req.body;
        
        if(newPassword != confirmPassword){
            return res.status(403)
                  .json({message: "New Password and Confirm Password are not same",success:false});
        }


        const  admin = await Admin.findOne({email});

        const errorMsg = 'Auth failed email or password is wrong';

        if(!admin){
            return res.status(403)
                  .json({message: errorMsg,success:false});
        }

        const isPassEqual = await bcrypt.compare(password,admin.password);

        if(!isPassEqual){
            return res.status(403)
                 .json({message:errorMsg,success:false})
        }

        admin.password = await bcrypt.hash(newPassword,10);
        admin.save();
        res.status(200)
            .json(
                {
                    message:"Password changed successfully",
                    success: true,
                   
                }
            )
    }
    catch(err) {
        res.status(500)
          .json(
            {
                message:"Internal server error",
                success:false
            }
          )
    }
}

module.exports = {
    changePassword,
    logIn,
    signUp
}