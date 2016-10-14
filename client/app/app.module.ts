import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from  '@angular/http'
import {AppComponent}   from './app.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {FormsModule , ReactiveFormsModule}    from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports:      [ BrowserModule , Ng2Bs3ModalModule, HttpModule , FormsModule , ReactiveFormsModule],
    declarations: [AppComponent, EmployeesComponent],
    bootstrap:    [AppComponent]
})
export class AppModule { }
