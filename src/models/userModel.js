const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    firstName: {type:String,required:true},
    lastName: String,
    mobile: String,
    emailId: String,
    password:String,
	age: Number,
 	gender:{
         type:String,
         enum:["male","female","other"]
           },
	isDeleted:{
          type :Boolean,
          default:false
    } 

},{timestamps: true})

module.exports = mongoose.model('User',userSchema) //users