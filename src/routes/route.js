const express = require('express');
const router = express.Router();
const bookModels = require('../models/bookModels')
const authorModels = require('../models/authorModel')
const allControllers = require('../controllers/allController')


  router.post('/createBook',allControllers.createBook)
  router.post('/createAuthor',allControllers.createAuthor)
  router.get('/getCBBooks',allControllers.getCBBooks)
  router.get('/getTwoState',allControllers.getTwoState)
  router.get('/authorNames',allControllers.authorNames)
  
  
  
module.exports = router;