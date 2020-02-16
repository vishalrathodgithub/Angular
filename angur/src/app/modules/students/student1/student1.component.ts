import { Component, OnInit } from '@angular/core';
import { studdata } from 'src/assets/studdata.const';
import { Student } from 'src/model/student.model';
import { StudentallService } from 'src/app/studentall.service';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component implements OnInit {

  constructor(private studentall:StudentallService) { }
  // studentdata:Student[]=studdata;

  ngOnInit() {
  }

}
