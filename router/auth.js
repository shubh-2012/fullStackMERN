const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");
router.get('/',(req,res) =>{
    res.send(`Hello World from router`);
});

router.post('/register',(req,res)=>{

    const{name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill the details properly"});
    }

    User.findOne({ email:email })
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({ error: "email already exist"});
        }

        const user= new User({name,email,phone,work,password,cpassword});

        user.save().then(() =>{
            res.status(201).json({message : " user registered successfully"});
        }).catch((err) => res.status(500).json({error: " registration failed"}));
    }).catch(err=> {
        console.log(err);
    });

});

//login route

router.post('/signin',async(req,res)=>{
    //console.log(req.body);
   // res.json({message:"hello awesome"});
   try{
    const{ email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({error:"please fill credentials"});
    }

    const userLogin = await User.findOne({email:email})

    console.log(userLogin);

    if(!userLogin){
        res.status(400).json({error:"user signin unsuccessfull"});
    }else{
        res.json({message:"user signin successfull"});
    }

    
   }catch(err){
       console.log(err);
   }
});

module.exports =router;