import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Employee } from 'src/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private shared:SharedService) { }


  ngOnInit() {
    this.shared.getData();
  }
  deleteEmployee(emp:Employee){
    alert("Deleting Employee details");
    this.shared.delete2(emp);
  }
  edit (emp:Employee){
    this.shared.btnHide=true;
    this.shared.btnName="Update"
    this.shared.hide=false;
    this.shared.employee1=Object.assign({},emp);
  }
}

