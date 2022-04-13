const bookModels = require('../models/bookModels')

const createBook = async function (req, res) {
    let data = req.body
    let dataSaved = await bookModels.create(data)
    res.send(  {  msg : dataSaved} )
 };
const bookList = async function(req,res){
    const bookList =await bookModels.find().select({bookName : 1 ,autherName : 1, _id : 0})
    res.send( { msg : bookList } )
         
 };
const getBooksInYear = async function(req,res){
   let data = req.body.year
   const savedData =await bookModels.find({year:data})
   res.send( { msg : savedData } )
            
 };

const getXINRBooks = async function(req,res){
   const getXINRBooks =await bookModels.find({"price.indianPrice" : {$in:[100,200,500]}} )
   res.send( { msg : getXINRBooks } )
};
const getRandomBooks  = async function(req,res){
   const getRandomBooks  =await bookModels.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
   res.send( { msg : getRandomBooks  } )
               
};
const getParticularBooks  = async function(req,res){
   let data = req.body
   const getParticularBooks  =await bookModels.find(data)
   res.send( { msg : getParticularBooks  } )
               
};

      
      
      module.exports.createBook=createBook
      module.exports.bookList=bookList
      module.exports.getBooksInYear=getBooksInYear
      module.exports.getXINRBooks=getXINRBooks
      module.exports.getRandomBooks=getRandomBooks
      module.exports.getParticularBooks=getParticularBooks