import {Component} from 'angular2/core';
import {EmployeeFormComponent} from './employee-form.component';
import {NavBarComponent} from './navbar.component';


@Component({
    selector: 'my-app',
    template: `
              <edge-nav></edge-nav>
              <edge-form></edge-form>
              `,
    directives: [EmployeeFormComponent, NavBarComponent]
})

export class AppComponent { }
