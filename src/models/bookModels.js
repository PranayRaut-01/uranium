const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {type:String,
        require:true
    },
    price:{indianPrice:Number,
    europeanPrice:Number
    },
    year: {type : Number,
    default:2021
    },

    autherName: String,
    totalPages:Number,
    tags:[String],
    stockAvailable :Boolean
    
},{timestamps: true})

module.exports = mongoose.model('Book',bookSchema) //books