import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {Http, Response, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'edge-form',
  templateUrl: 'app/employee-form.component.html',
  providers: [EmployeeService]
})

export class EmployeeFormComponent{  
  constructor(private http: Http, private _employeeService: EmployeeService) {
  }

  statuses = ['Employed', 'Unemployed', 'Unknown', 'Retired'];
  // model = new Employee(0, '', '', '');
  model = {firstName: '', lastName: '', statuses: ''}
  submitted = false;
  active = true;
  errorMessage: string;
  employees: Employee[];
  onSubmit() { 
    this.submitted = true; 
  }

  submission(event): Observable<Employee>{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/new', JSON.stringify(this.model), { headers: headers })
      .map(res => res)
      .subscribe((employees) => {
      this.employee = employees;);
      this.active = false;
      setTimeout(()=> this.active = true, 0);
    }
  // submission(event){
  //   console.log(this._employeeService);
  //   this._employeeService.addEmployee ()
  //     .subscribe(
  //      employee  => this.employees.push(employee),
  //      error =>  this.errorMessage = <any>error);
  //     this.active = false;
  //     setTimeout(()=> this.active = true, 0);
  // }

}

