const express = require('express');
const router = express.Router();
const batchModels = require('../models/batchModel')
const developerModels = require('../models/developerModel')
 const allControllers = require('../controllers/allController')


   router.post('/createBatch',allControllers.createBatch)
   router.post('/createDeveloper',allControllers.createDeveloper)
   router.get('/scholarship-developers',allControllers.getScholershipDevs)
    router.get('/getDevs',allControllers.getDevs)
  
 
   
module.exports = router;