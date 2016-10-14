import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
        constructor(private  http:Http){
            console.log('Employee Service init');
        }

        getEmployees(){
            return this.http.get('http://localhost:3000/api/employees')
                .map(res => res.json());
        }

        addEmployee(newEmployee){

            var headers = new Headers();
            headers.append('Content-Type','application/json');
            return this.http.post('http://localhost:3000/api/employee', JSON.stringify(newEmployee),{headers: headers})
                .map(res => res.json());
        }

         deleteEmployee(id){
        return this.http.delete('/api/employee/'+id)
            .map(res => res.json());
        }

    updateEmployee(employee){

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('http://localhost:3000/api/employee/'+employee._id, JSON.stringify(employee),{headers: headers})
            .map(res => res.json());
    }
}
