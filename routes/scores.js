var express = require('express')
var router = express.Router()
var fs = require('fs')

router.get('/', function (req, res, next) {
  fs.readFile('./scores.json', 'utf8', function (err, data) {
    if (err) throw err
    var jsondata = JSON.parse(data)
    var arr1 = jsondata.employees
    var arr2 = []
    console.log(arr1.forEach(function(x) {
      console.log(x.firstName)
      arr2.push(x.firstName)
      console.log(arr2)
    }))
    res.render('scores', { scores: arr2 })
  })
})

module.exports = router
