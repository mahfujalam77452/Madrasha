const Joi = require('joi');

const signUpValidation = (req,res,next) => {

      const schema = Joi.object(
        {
            email:Joi.string().email().required(),
            password:Joi.string().min(4).max(100).required()
        }
      );

      const {error} = schema.validate(req.body);
      if(error){
        return res.status(400)
              .json({message:"Bad request",error})
      }

      next();

}

const logInValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}


const changePasswordValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
        newPassword: Joi.string().min(4).max(100).required(),
        confirmPassword: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}

module.exports = {
    signUpValidation,
    logInValidation,
    changePasswordValidation
}