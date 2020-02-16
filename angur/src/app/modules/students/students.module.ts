import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { from } from 'rxjs';
import { StudentallService } from 'src/app/studentall.service';



@NgModule({
  declarations: [Student1Component, Student2Component],
  imports: [
    CommonModule

  ],
  providers:[StudentallService],
  exports:[Student1Component, Student2Component]
})
export class StudentsModule { }
