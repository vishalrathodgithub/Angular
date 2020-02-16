import { Component } from '@angular/core';
import { Student } from 'src/model/student.model';
import { studdata } from 'src/assets/studdata.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angur';
  studentdata:Student[]=studdata;
}
