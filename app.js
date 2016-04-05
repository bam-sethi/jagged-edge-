var express = require('express');
var app = express();
var Faker = require('./node_modules/faker');
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname + '/frontEnd'))


var bigDataArray = [];
var dataSet = {};
var data = {};

function generateData(){
  data = {  firstName : Faker.name.firstName(),
              lastName : Faker.name.lastName(),
              location : Faker.address.city(),
              company : Faker.company.companyName(),
              date : Faker.date.recent(),
              image : Faker.image.avatar()
          }
  return data
}



for(var i = 0; i < 50; i++){
  generateData()

  bigDataArray.push(data)
  // console.log(bigDataArray);
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