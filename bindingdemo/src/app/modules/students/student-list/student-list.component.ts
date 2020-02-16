import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Student } from 'src/model/Student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit() {
    this.shared.getData()
  }
  Studelete(stud:Student){
    this.shared.deletedata(stud)
  }
  edit(studs:Student){
    this.shared.Student1=Object.assign({},studs)
    this.shared.BtnName="Update"
    this.shared.ResetBtnHide=true
    this.shared.Id_Hide=false
  }
}
