var express = require('express')
var router = express.Router()
var fs = require('fs')

router.get('/', function (req, res, next) {
  // a function to load json data from a file
  function loadJSONfile (filename, encoding) {
    try {
      // default encoding is utf8
      if (typeof (encoding) == 'undefined') encoding = 'utf8';
      
      // read file synchroneously
      var contents = fs.readFileSync(filename, encoding);

      // parse contents as JSON
      return JSON.parse(contents);
      
    } catch (err) {
      // an error occurred
      throw err;  
    }
  } // loadJSONfile
  console.log(__dirname)
  var myData = loadJSONfile('scores.json')
  console.log('loadJSONfile:', myData)

  var arr1 = myData.employees
  var record = {"firstName":"han", "lastName":"tan", "scores":88}
  arr1.push(record)
  var obj1 = JSON.stringify(myData, null, ' ')
  fs.writeFile("scores.json", obj1, function(err) {
    if(err) {
        return console.log(err)
    }
    console.log("The file was saved!")
  })
  console.log('loadJSONfile:', myData)
})

module.exports = router