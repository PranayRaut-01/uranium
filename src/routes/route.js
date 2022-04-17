const express = require('express');
const router = express.Router();
const bookModels = require('../models/bookModels')
const authorModels = require('../models/authorModel')
const publisherModels = require('../models/publisherModel')
const allControllers = require('../controllers/allController')


   router.post('/createBook',allControllers.createBook)
   router.post('/createAuthor',allControllers.createAuthor)
   router.post('/createPublisher',allControllers.createPublisher)
   router.get('/getAllBooks',allControllers.getAllBooks)
   router.put('/books',allControllers.newBook)
   router.put('/updatePrice',allControllers.updatePrice)
 
   
module.exports = router;