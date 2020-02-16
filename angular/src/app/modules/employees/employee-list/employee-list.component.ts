import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student.model';
import { studentdata } from 'src/assets/studentdata.const';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  studata:Student[]=studentdata;
  constructor() { }

  ngOnInit() {
  }

}
