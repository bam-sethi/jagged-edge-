import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Employee}       from './employee';

@Injectable()
export class EmployeeService {
  constructor (private http: Http) {}

  private _employeesUrl = '/list';  // URL to web api

  getEmployees () {
    return this.http.get(this._employeesUrl)
                    .map(res => res.json())
                    // .do(res => console.log("res", res))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}