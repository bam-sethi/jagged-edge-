var express = require('express');
var app = express();
var Faker = require('./node_modules/faker2');
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname + '/frontEnd'))


var bigDataArray = [];

for(var i = 0; i < 50; i++){
  bigDataArray.push(Faker.Helpers.userCard());
};

fs.writeFile('dataSet.json', JSON.stringify(bigDataArray), function(){
  console.log('data set produced');
})

// root path
app.get("/", function (req, res) {
  // render index.html
  res.sendFile(path.join(__dirname + '/frontEnd/index.html'))
});

app.get('/list', function (req, res) {
  res.json({bigDataArray});
  // res.sendFile('./dataSet.json')

})


app.listen(3000, function () {
  console.log('Listening on port 3000');
});