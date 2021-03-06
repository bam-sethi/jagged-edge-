import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {ConvertPipe} from './pipeTransform';
import {Http, HTTP_PROVIDERS, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'employee-list',
  templateUrl: 'app/employee-list.component.html',
  providers: [
    HTTP_PROVIDERS,
    EmployeeService,
  ],
  pipes: [ConvertPipe] 
})

export class EmployeeListComponent implements OnInit { 
  
  constructor (private http: Http, private _employeeService: EmployeeService) {}

  employees: Employee[];
  statuses = ['Employed', 'Unemployed', 'Unknown', 'Retired'];
  // model = new Employee(0, '', '', '');
  public model = {firstName: '', lastName: '', statuses: '', image:'../images/corp.jpg'}
  submitted = false;
  active = true;
  errorMessage: string;

  onSubmit() {
    this.submitted = true; 
  }

  ngOnInit() { 
    this.getEmployees(); 
  }

  getEmployees() {
    this._employeeService.getEmployees()
      .subscribe(
        res => {
          this.employees = res
        },
        error =>  this.errorMessage = <any>error);
  }

  submission(event){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/new', JSON.stringify(this.model), { headers: headers })
      .map(res => res)
      .subscribe((employees) => {
      this.employee = employees;);
      this.active = false;
      setTimeout(()=> this.active = true, 0);
      this.getEmployees();
      this.model = {firstName: '', lastName: '', statuses: ''}
    }


}

