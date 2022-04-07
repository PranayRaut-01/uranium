const express = require('express');

const router = express.Router();
//Problem 1
router.get('/movies', function(req, res) {
  const arr =["Spiderman","Batman","Superman", "Deadpool","Wolverine" ]
    res.send(arr)
})
//Problem 2 & 3 
router.get('/movies/:indexNumber', function (req, res) {
    const arr =["Spiderman","Batman","Superman", "Deadpool","Wolverine" ]
    const id = req.params.indexNumber
    if (id<arr.length){
        res.send(arr[id])
    }else{
        res.send('Use valid index')
    }

  //Problem 4  
});
router.get('/films', function(req, res) {
    const arr1 =[ {
        "id": 1,
        "name": "One piece"
       }, {
        "id": 2,
        "name": "Death Note"
       }, {
        "id": 3,
        "name": "Kingdom"
       }, {
        "id": 4,
        "name": "Hunter X Hunter"
       }
        ]
      res.send(arr1)
  })
  //Problem 5
  router.get('/films/:filmId', function(req, res) {
      const fId = req.params.filmId 
      const y = 1
      const z = fId - y
   
    const arr1 =[ {
        "id": 1,
        "name": "One piece"
       }, {
        "id": 2,
        "name": "Death Note"
       }, {
        "id": 3,
        "name": "Kingdom"
       }, {
        "id": 4,
        "name": "Hunter X Hunter"
       }
        ]

        if(z<arr1.length){
            res.send(arr1[z])
        }else 
            res.send("No movie exists with this id")
        
      
  })






module.exports = router;
// adding this comment for no reason