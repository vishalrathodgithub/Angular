import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Student } from 'src/model/Student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit() {
  }
  submitdata(stud:Student){
    if (stud.id===null){
    this.shared.submit(stud)
  }
  else{
      this.shared.Update(stud)
        
     
  }}
  reset(stude:Student){
    this.shared.Student1=Object.assign({},this.shared.ResetStudent)
  }
      

  }