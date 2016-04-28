import {Component} from 'angular2/core';
import {EmployeeFormComponent} from './employee-form.component';
import {NavBarComponent} from './navbar.component';
import {EmployeeListComponent} from './employee-list.component';
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `<edge-nav>
               </edge-nav>
               <edge-form>
               </edge-form>
               <employee-list></employee-list>
              `,
    directives: [EmployeeFormComponent, NavBarComponent, EmployeeListComponent]
})

// @RouteConfig([
//   { 
//     path: '/', 
//     name: 'EmployeeList',
//     component: EmployeeListComponent,
//     useAsDefault: true
//   },
//   {
//     path: '/',
//     name: 'EmployeeForm',
//     component: EmployeeFormComponent

//   }
//  ])

export class AppComponent { }
