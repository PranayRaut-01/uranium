const bookModels = require('../models/bookModels')

const createBooks = async function (req, res) {
    let data = req.body
    let dataSaved = await bookModels.create(data)
    res.send(  {  msg : dataSaved} )
 };

    const getAllBooks = async function(req,res){
    const getAllBooks =await bookModels.find()
    res.send( { msg : getAllBooks } )
    
      };
      module.exports.createBooks=createBooks

      module.exports.getAllBooks=getAllBooks