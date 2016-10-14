import { Component , ViewChild} from '@angular/core';
import {OnInit} from "@angular/core";
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../../employee';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    moduleId: module.id,
    selector: 'employees',
    templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit {
    @ViewChild('Modal1')
    modal1: ModalComponent;

    @ViewChild('Modal2')
    modal2: ModalComponent;

    @ViewChild('Modal3')
    modal3: ModalComponent;


       
        employees : Employee[];
        name: string;
        job_title: string;
        age: number;
        nickname: string;
        year: number;
        Employee: boolean;
        isAvailable = true;

    constructor(private employeeservice:EmployeeService){
            this.employeeservice.getEmployees()
                .subscribe(employees => {
                //    console.log(employees);
                this.employees = employees;
            });
    }


    addEmployee(event){
            event.preventDefault();
            var newEmployee = {
                name : this.name,
                job_title: this.job_title,
                age: this.age,
                nickname: this.nickname,
                year: this.year,
                Employee: this.Employee

            }
            this.employeeservice.addEmployee(newEmployee)
                .subscribe(employee => {
                    this.employees.push(employee);
                    this.name ='';
                }) ;
    }



    deleteEmployee(id) {
        var employees = this.employees;

        this.employeeservice.deleteEmployee(id).subscribe(data => {
            if(data.n == 1){
                for(var i=0;i < employees.length;i++){
                    if(employees[i]._id == id){
            employees.splice(i, 1);
                         }
                    }
            }
        });
}


    updateEmployee(employee){
        var _employee = {
            _id:employee._id,
            name : employee.name,
            job_title: employee.job_title,
            age: employee.age,
            nickname: employee.nickname,
            year: employee.year,
            Employee: employee.Employee
        };
        this.employeeservice.updateEmployee(_employee).subscribe(data =>{
            console.log(employee);
        });
    }
}
