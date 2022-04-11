const express = require('express');
var bodyParser = require('body-parser');
const{default: mongoose}= require('mongoose')

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
mongoose.connect('mongodb+srv://pattamu:iKHwECgQCaYNVpge@sandeepcluster.9rzkh.mongodb.net/Pranay123-DB',{
    useNewUrlParser:true
})
.then( ()=> console.log("Mongoose is connected"))
.catch(err=>console.log(err))
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
