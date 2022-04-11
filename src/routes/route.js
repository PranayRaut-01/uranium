const express = require('express');
const router = express.Router();
const bookModels = require('../models/bookModels')
const bookControllers = require('../controllers/bookController')

   router.post('/createBooks',bookControllers.createBooks)

  router.get('/getBooks',bookControllers.getAllBooks)
  
module.exports = router;