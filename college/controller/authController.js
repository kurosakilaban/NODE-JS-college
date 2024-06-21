const express = require('express');
const router = express.Router(); // Import Router from Express
const Auth = require('../model/Auth');

router .post('/register',async(req,res,next)=>{
    try{
        // const {email,password}=req.body;
        // if(!email || !password)throw createError.BadRequest();
        const result = await authSchema .validateAsync (req.body);

        const Exists =await User.findOne({email: email})
        if(Exists) throw createError.Conflict(`${email}is already been registered`)
            const user = new User(result)

      res .send({accessToken});
    } catch(error){
        if(error.isjoi ===true)error.status =422
        next(error)
    }
})
