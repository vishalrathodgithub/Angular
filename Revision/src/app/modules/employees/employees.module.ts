import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedService } from 'src/app/shared/shared.service';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[EmployeeComponent, EmployeeListComponent],
  providers:[SharedService]
})
export class EmployeesModule { }
