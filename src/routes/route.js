const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {

const arr = ['pranay','shubham','ruchi',"raghav",'pankaj','suhas',]

    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
 res.send(arr)
});

router.get('/candidates',function(req,res){

    const arr = ['pranay','shubham','ruchi',"raghav",'pankaj','suhas',]
    const obj =req.query.count
    const arr1 =[]

    function count(){
        for(let i=0; i<obj;i++){
         arr1.push(arr[i])
        }

        
    }
    res.send(arr1)
})


module.exports = router;
// adding this comment for no reason