const dotenv= require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app= express();

dotenv.config({ path: './config.env'});

require('./db/conn');
//const User= require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT= process.env.PORT;

const middleware = (req,res, next) => {
    console.log(`Hello my Middleware`);
    next();
}



app.get('/',(req,res) =>{
    res.send(`Hello World`);
});

app.get('/signin',(req,res) =>{
    res.send(`Hello World  signin`);
});

app.get('/signup',(req,res) =>{
    res.send(`Hello World signup`);
});

app.get('/about',middleware,(req,res) =>{
    console.log(`HI`);
    res.send(`Hello World know about me`);
});

app.get('/contact',(req,res) =>{
    res.send(`Hello World get my contact`);
});

app.listen(PORT,()=>{
    console.log(`everything is fine at ${PORT}`);
});