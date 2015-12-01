var express = require('express')
var router = express.Router()
var mongoose = require('mongoose');
var username = process.env.MONGODB_USER
var password = process.env.MONGODB_PASSWORD
mongoose.connect('mongodb://' + username + ':' + password + '@ds027819.mongolab.com:27819/playground')

router.get('/', function (req, res, next) {
	var Score = mongoose.model('employee', {
  		firstName: String,
  		lastName: String,
  		scores: Number
  	})
  	var query = {'firstName':'tessss'}
  	var update = {'firstName':'fr'}
  	var options = {new: true}
	Score.findOneAndUpdate(query, update, options, function(err, char){
		if (err) console.log('error')
	})
	 // var addscore = new Score({
	 //    	firstName: "wasspu",
	 //    	lastName: "dude",
	 //    	scores: 50
	 //  	})
	 //  	addscore.save(function (err){
	 //  	if (err) console.log('meow')
	 //  	})
})
module.exports = router
