const express = require('express');
const router = express.Router();
const userModels = require('../models/userModel')
 const allControllers = require('../controllers/allController')
 const middleware= require('../middleware/auth')


    router.post('/createUser',allControllers.createUser)
    router.post('/login',allControllers.login)
    router.get('/users/:userId',middleware.mid1,allControllers.getUserData)
    router.put('/users/:userId',middleware.mid1,allControllers.updateUser)
    router.delete('/users/:userId',middleware.mid1,allControllers.deleteUser)
  
module.exports = router;