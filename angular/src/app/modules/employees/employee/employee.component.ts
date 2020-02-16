import { Component, OnInit } from '@angular/core';
import { studentdata } from 'src/assets/studentdata.const';
import { Student } from 'src/model/student.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  studata:Student[]=studentdata;

  constructor() { }

  ngOnInit() {
  }

}
