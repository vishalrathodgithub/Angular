import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedService } from 'src/app/shared/shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  providers:[SharedService],

  exports:[EmployeeComponent, EmployeeListComponent]
})
export class EmployeesModule { }
