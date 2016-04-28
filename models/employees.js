var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  location : String,
  company : String,
  date : String,
  image :  String,
  status : String
});

var Employee = mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;
