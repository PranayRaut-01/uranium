const mongoose = require('mongoose')

const batchSchema = new mongoose.Schema({
    Name:String,
    size:Number,
    program:{
        type:String,
        enum:["frontend","backend"]

    }
},{timestamps: true})

module.exports = mongoose.model('Batch',batchSchema) //batches