const bookModels = require('../models/bookModels')
const authorModels = require('../models/authorModel')
const publisherModels = require('../models/publisherModel')



 const createAuthor = async function (req, res) {
       let data = req.body
       let dataSaved = await authorModels.create(data)
       res.send(  {  msg : dataSaved} )
    };

    const createPublisher = async function (req, res) {
      let data = req.body
      let dataSaved = await publisherModels.create(data)
      res.send(  {  msg : dataSaved} )
   };

   const createBook = async function (req, res) {
      let data = req.body.author
      let data1= req.body.publisher
      if(data){
         if(data1){
                  let presentAuthor= await authorModels.find({_id:data})
                  let presentPublisher= await publisherModels.find({_id:data1})
                  if(presentAuthor.length!==0){
                     if(presentPublisher.length!==0){
                       let dataSaved = await bookModels.create(req.body)
                       res.send(  {  msg : dataSaved} )
                     }else
                     res.send({msg:"send valid publisher id"})
                  }else
                  res.send({mgs:"send valid author id"})
         }else
                  res.send({msg:"publisher id is required"})
   }else 
   res.send({msg:"author id is required"})
   };
   
const getAllBooks = async function(req,res){
   let specificBook = await bookModels.find().populate('author').populate('publisher')
   res.send({data: specificBook})
};

 
       module.exports.createBook=createBook
       module.exports.createAuthor=createAuthor
       module.exports.createPublisher=createPublisher
       module.exports.getAllBooks=getAllBooks
      