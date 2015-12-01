var mongoose = require('mongoose')
mongoose.connect('mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@ds027819.mongolab.com:27819/playground')

var Score = mongoose.model('employee', {
  		firstName: String,
  		lastName: String,
  		scores: Number
})