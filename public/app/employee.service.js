System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var EmployeeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this._employeesUrl = '/list'; // URL to web api
                }
                EmployeeService.prototype.getEmployees = function () {
                    return this.http.get(this._employeesUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                // addEmployee () {
                //   let body = JSON.stringify(employee);
                //   let headers = new Headers('Content-Type', 'application/json');
                //   // let options = new RequestOptions({Headers : headers});
                //   return this.http.post('/new',  employee, {Headers: headers})
                //                   .map(res => res)
                //                   .do(res => console.log(res))
                //                   .catch(this.handleError());
                // } 
                EmployeeService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error || 'Server error');
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee.service.js.map