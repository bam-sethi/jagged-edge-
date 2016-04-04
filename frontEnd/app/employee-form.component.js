System.register(['angular2/core', './employee'], function(exports_1, context_1) {
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
    var core_1, employee_1;
    var EmployeeFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            EmployeeFormComponent = (function () {
                function EmployeeFormComponent() {
                    this.statuses = ['Employed', 'Unemployed', 'Unknown', 'Retired'];
                    this.model = new employee_1.Employee(5201, '', '', '');
                    this.submitted = false;
                    this.active = true;
                }
                EmployeeFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                EmployeeFormComponent.prototype.submission = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this.model = new employee_1.Employee(11, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                Object.defineProperty(EmployeeFormComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                EmployeeFormComponent = __decorate([
                    core_1.Component({
                        selector: 'edge-form',
                        templateUrl: 'app/employee-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmployeeFormComponent);
                return EmployeeFormComponent;
            }());
            exports_1("EmployeeFormComponent", EmployeeFormComponent);
        }
    }
});
//# sourceMappingURL=employee-form.component.js.map