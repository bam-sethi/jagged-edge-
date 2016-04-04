import {Component} from 'angular2/core';
import {EmployeeFormComponent} from './employee-form.component';
import {NavBarComponent} from './navbar.component';
import {EmployeeListComponent} from './employee-list.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `<edge-nav>
               </edge-nav>
               <a [routerLink]="['EmployeeList']">List</a>
               <a [routerLink]="['EmployeeForm']">Form</a>
               <router-outlet></router-outlet>
              `,
    directives: [EmployeeFormComponent, NavBarComponent, EmployeeListComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { 
    path: '/list', 
    name: 'EmployeeList',
    component: EmployeeListComponent
  },
  {
    path: '/home',
    name: 'EmployeeForm',
    component: EmployeeFormComponent,
    useAsDefault: true
  }
 ])

export class AppComponent { }
