import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Employee} from './employee';

@Component({
  selector: 'edge-form',
  templateUrl: 'app/employee-form.component.html'
})

export class EmployeeFormComponent{  

  statuses = ['Employed', 'Unemployed', 'Unknown', 'Retired'];
  model = new Employee(5201, '', '', '');

  submitted = false;
  active = true;

  onSubmit() { 
    this.submitted = true; 
  }

  submission(event) {
    event.preventDefault();
    this.model = new Employee(11, '', '');
    this.active = false;
    setTimeout(()=> this.active = true, 0);
  }


  get diagnostic() { return JSON.stringify(this.model); }
}