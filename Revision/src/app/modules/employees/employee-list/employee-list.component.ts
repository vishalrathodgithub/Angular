import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { empty } from 'rxjs';
import { Employee } from 'src/model/Employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit() {
    this.shared.getData()
  }
  delete(emp:Employee){
    this.shared.deletedata(emp)
  }
  edit(emp:Employee){
    this.shared.BtnName="Update"
    this.shared.BtnHide=true
    this.shared.Id_Hide=false
    this.shared.employee1=Object.assign({},emp)
  }

}
