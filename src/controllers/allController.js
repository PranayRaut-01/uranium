const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');


   const createUser = async function (req, res) {
     try{
       let data = req.body
       let dataSaved = await userModel.create(data)
       if(!dataSaved) return    res.status(400).send(  {  msg : "send required data"} )
       res.status(201).send(  {  msg : dataSaved} )
     }
     catch(err){
      res.status(500).send( {msg:"Error",error:err.message})
     }
    };

   const login = async function (req, res) {
    try{
      let userName = req.body.emailId;
      let password = req.body.password;
    
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.status(400).send({
          status: false,
          msg: "username or the password is not valid",
        });
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "Uranium",
          organisation: "FunctionUp",
        },
        "Best-Cohort"
      );
      //res.setHeader("x-auth-token", token);
      res.status(201).send({ status: true, data: token });
    }
    catch(err){
     res.status(500).send( {msg:"Error",error:err.message})
    }
    };

    const getUserData = async function (req, res) {  
      try{
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(400).send({ status: false, msg: "No such user exists" });
    
      res.status(200).send({ status: true, data: userDetails });
    }
    catch(err){
     res.status(500).send( {msg:"Error",error:err.message})
    }
    };


    const updateUser = async function (req, res) {
      try{
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
       
        if (!user) {
          return res.status(400).send("No such user exists");
        }
      
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
        res.status(201).send({ status: true, data: updatedUser });
      }
      catch(err){
       res.status(500).send( {msg:"Error",error:err.message})
      }
      };

      const deleteUser= async function(req,res){
        try{
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
          return res.status(400).send("No such user exists");
        }
        let deletedUser = await userModel.updateOne({ _id: userId }, {isDeleted:true});
        res.status(201).send({"msg":"your data is deleted"})
      }
      catch(err){
       res.status(500).send( {msg:"Error",error:err.message})
      }
      }
   

       module.exports.login=login
       module.exports.createUser=createUser
       module.exports.getUserData=getUserData
       module.exports.updateUser=updateUser
       module.exports.deleteUser=deleteUser

      
     