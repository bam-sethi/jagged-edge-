import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {EmployeeListComponent} from './employee-list.component';

@Component({
    selector: 'my-app',
    template: `<edge-nav>
               </edge-nav>
               <employee-list></employee-list>
              `,
    directives: [NavBarComponent, EmployeeListComponent]
})

export class AppComponent { }
