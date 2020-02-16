import { Component, OnInit } from '@angular/core';
import { studdata } from 'src/assets/studdata.const';
import { Student } from 'src/model/student.model';
import { StudentallService } from 'src/app/studentall.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component implements OnInit {

  constructor(private studentall:StudentallService) { }
  // studentdata:Student[]=studdata;

  ngOnInit() {
  }

}
