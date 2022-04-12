const express = require('express');
const router = express.Router();
const bookModels = require('../models/bookModels')
const bookControllers = require('../controllers/bookController')

  router.post('/createBook',bookControllers.createBook)
  router.get('/bookList',bookControllers.bookList)
  router.post('/getBooksInYear',bookControllers.getBooksInYear)
  router.get('/getXINRBooks',bookControllers.getXINRBooks)
  router.get('/getRandomBooks',bookControllers.getRandomBooks)
  router.post('/getParticularBooks',bookControllers.getParticularBooks)
  
  
module.exports = router;