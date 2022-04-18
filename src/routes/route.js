const express = require('express');
const router = express.Router();
const batchModels = require('../models/batchModel')
const developerModels = require('../models/developerModel')
// const publisherModels = require('../models/publisherModel')
 const allControllers = require('../controllers/allController')


   router.post('/createBatch',allControllers.createBatch)
   router.post('/createDeveloper',allControllers.createDeveloper)
   // router.post('/createPublisher',allControllers.createPublisher)
   router.get('/scholarship-developers',allControllers.getScholershipDevs)
    router.get('/getDevs',allControllers.getDevs)
   // router.put('/updatePrice',allControllers.updatePrice)
 
   
module.exports = router;