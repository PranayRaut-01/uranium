const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
        _id: ObjectId,
	name:String
	// author:{
        //         type: ObjectId,
        //         ref:newAuthors
        //         },
	// price:Number,
	// ratings:4.5,
	// publisher: {
        //         type: ObjectId,
        //         ref:newPublishers
        //         },
},{timestamps: true})

module.exports = mongoose.model('NewBook',bookSchema) 