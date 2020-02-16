import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Employee } from 'src/model/employee.model';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit() {
  }
  submit(emp:Employee)
  {
    if (emp.id==null)
    {
    this.shared.submit(emp)
      }
      else{
        this.shared.update(emp);
      }
    }
    reset(){
      this.shared.employee1=Object.assign({},this.shared.empReset)
    }
      
    }
