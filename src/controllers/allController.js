const batchModels = require('../models/batchModel')
const developerModels = require('../models/developerModel')




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
    