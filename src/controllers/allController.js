const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');

   const createUser = async function (req, res) {
       let data = req.body
       let dataSaved = await userModel.create(data)
       res.send(  {  msg : dataSaved} )
    };

   const login = async function (req, res) {
      let userName = req.body.emailId;
      let password = req.body.password;
    
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.send({
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
      res.send({ status: true, data: token });
    };

    const getUserData = async function (req, res) {  
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
    
      res.send({ status: true, data: userDetails });
    };


    const updateUser = async function (req, res) {
        
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
       
        if (!user) {
          return res.send("No such user exists");
        }
      
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
        res.send({ status: true, data: updatedUser });
      };

      const deleteUser= async function(req,res){
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
          return res.send("No such user exists");
        }
        let deletedUser = await userModel.updateOne({ _id: userId }, {isDeleted:true});
        res.send({"msg":"your data is deleted"})
      }

       module.exports.login=login
       module.exports.createUser=createUser
       module.exports.getUserData=getUserData
       module.exports.updateUser=updateUser
       module.exports.deleteUser=deleteUser