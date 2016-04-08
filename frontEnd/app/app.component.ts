import {Component} from 'angular2/core';
import {EmployeeFormComponent} from './employee-form.component';
import {NavBarComponent} from './navbar.component';
import {EmployeeListComponent} from './employee-list.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `<edge-nav>
               </edge-nav>
               <a [routerLink]="['EmployeeList']" class="glyphicon glyphicon-list
">List </a>
               <a [routerLink]="['EmployeeForm']" class="glyphicon glyphicon-plus
">Form</a>
               <router-outlet></router-outlet>
              `,
    directives: [EmployeeFormComponent, NavBarComponent, EmployeeListComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { 
    path: '/list', 
    name: 'EmployeeList',
    component: EmployeeListComponent,
    useAsDefault: true
  },
  {
    path: '/home',
    name: 'EmployeeForm',
    component: EmployeeFormComponent

  }
 ])

export class AppComponent { }
