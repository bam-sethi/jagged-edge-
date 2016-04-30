var express = require('express');
var app = express();
var Faker = require('./node_modules/faker');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Employees = require('./models/employees.js');


var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||process.env.MONGODB_URI || process.env.MONGOLAB_BLUE_URI ||
    'mongodb://localhost/jagged-edge';

var port = process.env.PORT || 3000;


// var bigDataArray = [];
var dataSet = {};
// var data = {};
var status = ['Employed', 'Unemployed', 'Unknown', 'Retired'];

// mongoose.connect('mongodb://localhost:27017/jagged-edge');

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/node_modules', express.static(__dirname + '/node_modules'));



function generateData(){
  var n = Math.round((Math.random() * 3))
  var employees = new Employees ({    
              firstName : Faker.name.firstName(),
              lastName : Faker.name.lastName(),
              location : Faker.address.city(),
              company : Faker.company.companyName(),
              date : Faker.date.recent(),
              image : Faker.image.avatar(),
              status : status[n]
          })
  employees.save(function(err, employee) {
    if (err) console.log(err);
  });
};

for(var i = 0; i < 1; i++){
  generateData()
  // bigDataArray.push(data)
  // console.log(bigDataArray);
};



// fs.writeFile('dataSet.json', JSON.stringify(bigDataArray), function(){
//   console.log('data set produced');
// })

// root path
app.get("/", function (req, res) {
  // render index.html
  res.sendFile(path.join(__dirname + '/frontEnd/index.html'))
});

app.get('/list', function (req, res) {
  Employees.find({}).sort({date:1}).exec(function(err, data){
    if(err){
      res.send("Error", err)
    } else {
      res.json(data)
    }
  });
})

app.post('/new', function (req, res) {
  var body = req.body;
  console.log(body)
  var employee = new Employees ({
    firstName : body.firstName,
    lastName : body.lastName,
    status : body.statuses
  });
  employee.save(function(err, employee) {
    if (err) console.log(err);
  });
})


app.listen(port, function () {
  console.log('Listening on port', port);
});

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});
