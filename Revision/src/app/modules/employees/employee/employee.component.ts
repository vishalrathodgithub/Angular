import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/Employee.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit() {
  }
  submit(emp:Employee){
    if (emp.id===null){
    this.shared.submitdata(emp)
  }
  else{
    this.shared.UpdateData(emp)
  }}

  reset(){
    this.shared.employee1=Object.assign({},this.shared.EmpReset)
  }

}
