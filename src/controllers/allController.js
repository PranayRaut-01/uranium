const bookModels = require('../models/bookModels')
const authorModels = require('../models/authorModel')

const createBook = async function (req, res) {
    let data = req.body
    let dataSaved = await bookModels.create(data)
    res.send(  {  msg : dataSaved} )
 };

 const createAuthor = async function (req, res) {
       let data = req.body
       let dataSaved = await authorModels.create(data)
       res.send(  {  msg : dataSaved} )
    };
   
const getCBBooks = async function(req,res){
    const bookList =await authorModels.find({author_Name:"Chetan Bhagat"})
    const aId=bookList[0].author_id
    const getbook = await bookModels.find({author_id:aId})
    res.send( { msg : getbook } )
         
 };

const getTwoState = async function(req,res){
   const savedData =await bookModels.find({name:"Two states"})
   const id=savedData[0].author_id
   const idBook = await authorModels.find({author_id:id}).select({author_name:1,_id:0})
   const xyz =  savedData[0].name
   const updatedPrice = await bookModels.findOneAndUpdate({name:xyz},{price:100},{new:true}).select({price:1,_id:0})  
   res.send( { msg :idBook,updatedPrice } )
 };


const authorNames = async function(req,res){
   const bookPrice =await bookModels.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
   const array = bookPrice.map(x=>x.author_id)
   let arr=[]
   for(i=0;i<array.length;i++){
       let x= array[i]
       const xyz =await authorModels.find( {author_id:x} ).select({ author_name :1,_id:0})
       arr.push(xyz)
   }

   const authorNames= arr.flat()
   res.send( { msg : authorNames } )
};     
       module.exports.createBook=createBook
       module.exports.createAuthor=createAuthor
       module.exports.getCBBooks=getCBBooks
       module.exports.getTwoState=getTwoState
       module.exports.authorNames=authorNames
