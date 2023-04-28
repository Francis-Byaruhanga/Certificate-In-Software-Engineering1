const express = require("express");
const {Model} = require("mongoose")
const router = express.Router();
const User = require('../models/signupModel');

router.get("/",(req, res)=>{
    res.render("signup")
  }); 
  
  router.post("/signup", async(req,res)=>{
    try{
      const user = new User(req.body);
      let userName = await User.findOne({username: req.body.username})
      if(userName){
        return res.send("This User already exists")
      }
      else{
        await User.register(user, req.body.password, (error)=>{
          if(error){
            throw error
          }
        })
      }
    }
    catch(error){
      res.status(400).send("Sorry it seems theres trouble  accessing this page")
      console.log(error)
    }
  })








module.exports = router;