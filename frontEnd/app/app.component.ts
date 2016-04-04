import {Component} from 'angular2/core';
import {EmployeeFormComponent} from './employee-form.component';
import {NavBarComponent} from './navbar.component';
import {EmployeeListComponent} from './employee-list.component';


@Component({
    selector: 'my-app',
    template: `<edge-nav></edge-nav>
               <employee-list></employee-list>
               <edge-form></edge-form>
              `,
    directives: [EmployeeFormComponent, NavBarComponent, EmployeeListComponent]
})

export class AppComponent { }
