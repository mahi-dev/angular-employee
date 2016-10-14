"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('../../services/employee.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var EmployeesComponent = (function () {
    function EmployeesComponent(employeeservice) {
        var _this = this;
        this.employeeservice = employeeservice;
        this.isAvailable = true;
        this.employeeservice.getEmployees()
            .subscribe(function (employees) {
            //    console.log(employees);
            _this.employees = employees;
        });
    }
    EmployeesComponent.prototype.addEmployee = function (event) {
        var _this = this;
        event.preventDefault();
        var newEmployee = {
            name: this.name,
            job_title: this.job_title,
            age: this.age,
            nickname: this.nickname,
            year: this.year,
            Employee: this.Employee
        };
        this.employeeservice.addEmployee(newEmployee)
            .subscribe(function (employee) {
            _this.employees.push(employee);
            _this.name = '';
        });
    };
    EmployeesComponent.prototype.deleteEmployee = function (id) {
        var employees = this.employees;
        this.employeeservice.deleteEmployee(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < employees.length; i++) {
                    if (employees[i]._id == id) {
                        employees.splice(i, 1);
                    }
                }
            }
        });
    };
    EmployeesComponent.prototype.updateEmployee = function (employee) {
        var _employee = {
            _id: employee._id,
            name: employee.name,
            job_title: employee.job_title,
            age: employee.age,
            nickname: employee.nickname,
            year: employee.year,
            Employee: employee.Employee
        };
        this.employeeservice.updateEmployee(_employee).subscribe(function (data) {
            console.log(employee);
        });
    };
    __decorate([
        core_1.ViewChild('Modal1'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], EmployeesComponent.prototype, "modal1", void 0);
    __decorate([
        core_1.ViewChild('Modal2'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], EmployeesComponent.prototype, "modal2", void 0);
    __decorate([
        core_1.ViewChild('Modal3'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], EmployeesComponent.prototype, "modal3", void 0);
    EmployeesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employees',
            templateUrl: 'employees.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map