const express = require('express');
const _ = require('lodash');

const logger = require('../logger/logger');    
const helper = require('../util/helper')
const format = require('../validator/formatter')

const router = express.Router();


router.get('/test-me', function (req, res) {
    //For logger file
    logger.welcome();        // calling a function
    res.send('My first api')

    //For helper file
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();

    // For formatter file
    format.trimming();
    format.toLowCase();
    format.toUpperCase();
    
});
router.get('/hello', function (req, res) {
 //Problem 4a
    const month = 
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'  
    ]
   
    console.log('The subarrays are:',_.chunk(month, 3));

    res.send('My first Api!');



//Problem 4 b
    const oddNumber = [1,3,5,7,9,11,13,15,17,19];
    console.log('The last 9 odd numbers are',_.tail(oddNumber));


//Problem 4 c
    const arr1 = [1,2,3,45,5];
    const arr2 = [11,10,3,45,5];
    const arr3 = [1,20,3,45,5];
    const arr4 = [15,21,35,45,5];
    const arr5 = [1,20,30,45,5];

    console.log('The final unique array is:',_.union(arr1,arr2,arr3,arr4,arr5));
//Problem 4d

    let createObj = [
        ['name', 'Pranay'], 
        ['city', 'Warora'], 
        ['Hobby', 'coding']
    ]
      
    let obj = _.fromPairs(createObj);
      
    console.log('The object created from array is:',obj)

});


module.exports = router;
// adding this comment for no reason