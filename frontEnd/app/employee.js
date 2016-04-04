System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters:[],
        execute: function() {
            Employee = (function () {
                function Employee(id, firstName, lastName, statuses) {
                    this.id = id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.statuses = statuses;
                }
                return Employee;
            }());
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=employee.js.map