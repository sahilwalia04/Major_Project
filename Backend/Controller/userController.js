// const mongoose = require("mongoose");
const {userModel, googleUserModel} = require("../Model/mongoDbSchema");
const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { oauth2Client } = require('../utils/goggleConfig');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const signin = async (req, res , next) =>{
    console.log("chal geya signin ");
    
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({
            message: "Please fill all the fields",
        })
    }
    console.log(username , email , password);
    const passwordHash = await bycrypt.hash(password , 10);
    console.log("hashpassword" , passwordHash);
   
    try{
        const user = await userModel.create({
            name : username,
            email : email,
            password : passwordHash,
        })
        next()
        // res.json({
        //     message: "User signed in successfully",
        //     data: {
        //         username,
        //         email,
        //         passwordHash,
        //     }
        // });
        
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message,
        })     
    }   
}



const login = async (req ,res) =>{
    console.log("login chal geya ");
    
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            message: "Please fill all the fields",
        })
    };
    try{
        const user = await userModel.find({email : email});
     const isCorrectPasswrd  = await  bycrypt.compare(password , user[0].password ) ;
     console.log("password" , password);
     
     console.log("isCorrectPasswrd" , isCorrectPasswrd);
   
        if(!isCorrectPasswrd){
            return res.status(400).json({
                message: "Invalid password",
            })
        }

        const token = jwt.sign({id: user[0]._id} , process.env.JWT_SECRET_KEY , {expiresIn: "1h"});
        console.log("token" , token);
         await res.cookie("token" , token , {
            httpOnly: true,
            // maxAge:  30*60 * 1000, // 30 minutes
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires : new Date(Date.now() + 60*60*1000),// 1 hours
        });
        
        
        
        res.json({
            message: "User logged in successfully",
            user: ({
                "email":user[0].email,
                "password" : user[0].password,         
        })        
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message,
        })     
    }
    
}





const googleLogin = async (req, res) => {
   try {
    const { code } = req.body;

    const { tokens } = await oauth2Client.getToken({
      code,
      redirect_uri: "https://shivamwallu.site" // frontend ka redirect_uri
    });
    oauth2Client.setCredentials(tokens);

    // User info
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name, picture } = userRes.data;

    let user = await googleUserModel.findOne({ email });
    if (!user) {
      user = await googleUserModel.create({ username: name, email, image: picture });
    }

    // JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    // Cookie set
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3600000,
    });

    res.json({ success: true, user });
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(500).json({ success: false, message: "Authentication Failed" });
  }
};



module.exports ={
    signin,
    login,
    googleLogin,
  }