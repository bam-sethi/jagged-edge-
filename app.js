var express = require('express');
var app = express();
var Faker = require('./node_modules/faker2');
var fs = require('fs');

app.use(express.static(__dirname + '/front-end'))

// root path
app.get("/", function (req, res) {
  // render index.html
  res.sendFile(path.join(__dirname + '/front-end/index.html'))
});

// var randomName = Faker.Name.findName();
// var randomEmail = Faker.Internet.email(); 
// var randomName2 = Faker.Name.findName();

// // res.send(randomName)
// console.log(randomName, randomName2, randomEmail)

var bigDataArray = [];

for(var i = 0; i < 50; i++){
  bigDataArray.push(Faker.Helpers.userCard());
};

fs.writeFile('./dataSet.json', JSON.stringify(bigDataArray), function(){
  console.log('data set produced');
})


app.listen(3000, function () {
  console.log('Listening on port 3000');
});