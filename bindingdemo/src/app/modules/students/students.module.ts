import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SharedService } from 'src/app/shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[StudentComponent, StudentListComponent],
  providers:[SharedService]
})
export class StudentsModule { }
