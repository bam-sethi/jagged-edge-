import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {EmployeeService} from './employee.service';
// import {Employee} from './employee';
import {ConvertPipe} from './pipeTransform';


@Component({
  selector: 'employee-list',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/employee-list.component.html',
  providers: [
    HTTP_PROVIDERS,
    EmployeeService,
  ],
  pipes: [ConvertPipe] 
})

export class EmployeeListComponent implements OnInit { 
  
  constructor (private _employeeService: EmployeeService) {}

  errorMessage: string;

  ngOnInit() { this.getEmployees(); }

  getEmployees() {
    this._employeeService.getEmployees()
      .subscribe(
        res => {
          this.employees = res.bigDataArray
          console.log(this.employees) 
        },
        error =>  this.errorMessage = <any>error);

  }

}

