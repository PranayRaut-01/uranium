const batchModels = require('../models/batchModel')
const developerModels = require('../models/developerModel')
//const publisherModels = require('../models/publisherModel')



 const createBatch = async function (req, res) {
       let data = req.body
       let dataSaved = await batchModels.create(data)
       res.send(  {  msg : dataSaved} )
    };

    const createDeveloper = async function (req, res) {
      let data = req.body
      let dataSaved = await developerModels.create(data)
      res.send(  {  msg : dataSaved} )
   };

   // const createBook = async function (req, res) {
   //    let data = req.body.author
   //    let data1= req.body.publisher
   //    if(data){
   //       if(data1){
   //                let presentAuthor= await authorModels.find({_id:data})
   //                let presentPublisher= await publisherModels.find({_id:data1})
   //                if(presentAuthor.length!==0){
   //                   if(presentPublisher.length!==0){
   //                     let dataSaved = await bookModels.create(req.body)
   //                     res.send(  {  msg : dataSaved} )
   //                   }else
   //                   res.send({msg:"send valid publisher id"})
   //                }else
   //                res.send({mgs:"send valid author id"})
   //       }else
   //                res.send({msg:"publisher id is required"})
   // }else 
   // res.send({msg:"author id is required"})
   // };
   
const getScholershipDevs = async function(req,res){
   
   let specificBook = await developerModels.find({percentage:{$gte:70},gender:"female"})
   res.send({data: specificBook})
};
const getDevs = async function(req,res){
   let data= req.query.percentage
   let data1 = req.query.program
   let specificPercent = await developerModels.find({percentage:{$gte:data}})
   let specificDev = await batchModels.find({Name:data1}).select({_id:1})
   let specificId = specificDev[0]._id
   let arr1 = []
for (let i = 0; i < specificPercent.length; i++) {
   const element = specificPercent[i];
        if(JSON.stringify(element.batch)===JSON.stringify(specificId)){
              arr1.push(element)
         }else 
              continue; 
}
   res.send({data: arr1})
};
   

       module.exports.createBatch=createBatch
       module.exports.createDeveloper=createDeveloper
       module.exports.getScholershipDevs=getScholershipDevs
        module.exports.getDevs=getDevs
    