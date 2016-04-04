import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'employee-list',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/employee-list.component.html'
})

export class EmployeeListComponent {
  data: Object;
  // constructor(http: Http) {
  //   http.get('/list')
  //     .map(res => res.json())
  //     .subscribe(data => this.data = data,
  //                 err => console.log(err))
  // }
}

