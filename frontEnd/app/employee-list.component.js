System.register(['angular2/core', 'angular2/http', './employee.service', './pipeTransform'], function(exports_1, context_1) {
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
    var core_1, http_1, employee_service_1, pipeTransform_1;
    var EmployeeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (pipeTransform_1_1) {
                pipeTransform_1 = pipeTransform_1_1;
            }],
        execute: function() {
            EmployeeListComponent = (function () {
                function EmployeeListComponent(_employeeService) {
                    this._employeeService = _employeeService;
                }
                EmployeeListComponent.prototype.ngOnInit = function () { this.getEmployees(); };
                EmployeeListComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this._employeeService.getEmployees()
                        .subscribe(function (res) {
                        _this.employees = res.bigDataArray;
                        console.log(_this.employees);
                    }, function (error) { return _this.errorMessage = error; });
                };
                EmployeeListComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-list',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/employee-list.component.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            employee_service_1.EmployeeService,
                        ],
                        pipes: [pipeTransform_1.ConvertPipe]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
                ], EmployeeListComponent);
                return EmployeeListComponent;
            }());
            exports_1("EmployeeListComponent", EmployeeListComponent);
        }
    }
});
//# sourceMappingURL=employee-list.component.js.map