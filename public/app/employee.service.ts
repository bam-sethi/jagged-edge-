import {Injectable}     from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response, Headers, RequestOptionsArgs, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Employee}       from './employee';

@Injectable()
export class EmployeeService {

  constructor (private http: Http) {}
  private _employeesUrl = '/list';  // URL to web api

  getEmployees (): Observable<Employee[]> {
    return this.http.get(this._employeesUrl)
                    .map(res => res.json())
                    // .do(res => console.log("res", res)) //logging function
                    .catch(this.handleError);
  }

  // addEmployee () {

  //   let body = JSON.stringify(employee);
  //   let headers = new Headers('Content-Type', 'application/json');
  //   // let options = new RequestOptions({Headers : headers});

  //   return this.http.post('/new',  employee, {Headers: headers})
  //                   .map(res => res)
  //                   .do(res => console.log(res))
  //                   .catch(this.handleError());
  // } 

  public handleError (error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}