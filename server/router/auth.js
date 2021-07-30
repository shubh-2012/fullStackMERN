const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
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
        }else if(password != cpassword){
            return res.status(422).json({ error: "password does not match"});
        }else{
            const user= new User({name,email,phone,work,password,cpassword});

            user.save().then(() =>{
            res.status(201).json({message : " user registered successfully"});
             }).catch((err) => res.status(500).json({error: " registration failed"}));
        }

        
    }).catch(err=> {
        console.log(err);
    });

});

//login route

router.post('/signin',async(req,res)=>{
    //console.log(req.body);
   // res.json({message:"hello awesome"});
   try{
    let token;
    const{ email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({error:"please fill credentials"});
    }

    const userLogin = await User.findOne({email:email})

    //console.log(userLogin);

    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        
        token= await userLogin.generateAuthToken();
        //console.log(token);

        res.cookie("jwtoken",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({error:"Invalid credentials"});
        }else{
            res.json({message:"user signin successfull"});
        }
    
    }else{
        res.status(400).json({error:"Invalid credentials"});
    }

    
    
   }catch(err){
       console.log(err);
   }
});

router.get('/About',authenticate,(req,res) =>{
    //console.log(`about`);
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res) =>{
    //console.log(`about`);
    res.send(req.rootUser);
});

//contact us page
router.post('/Contact',authenticate,async(req,res) =>{
   try{
        const{name,email,phone,message}=req.body;
        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"please fill details in contact form"});
        }
        const userContact = await User.findOne({_id:req.userID});
        if(userContact){
            const userMessage= await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message:"contact message sent successfully"});
        }
   }catch(error){
        console.log(error);
   }
});

//logout page
router.get('/Logout',(req,res) =>{
    console.log(`logout`);
    res.clearCookie('jwtoken',{path:"/"});
    res.status(200).send('user logout');
});



module.exports =router;