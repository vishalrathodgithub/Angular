import { Component } from '@angular/core';
import { Student } from 'src/model/student.model';
import { studentdata } from 'src/assets/studentdata.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
studentdata:Student[]=studentdata;
}