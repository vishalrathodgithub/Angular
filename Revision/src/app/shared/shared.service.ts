import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from 'src/model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/Employee"
  employeeDetails:Employee[]
  getData(){
    this.http.get(this.url).subscribe(
      (data:Employee[])=>{this.employeeDetails=data})
  }
  deletedata(emp:Employee){
    this.http.delete(this.url+"/"+emp.id).subscribe()
  }
  // for edit 
  employee1:Employee={
    id:null,
    first:"",
    last:"",
    designation:""

  }
// for reset empty variable
  EmpReset:Employee={
    id:null,
    first:"",
    last:"",
    designation:""

  }
  submitdata(emp:Employee){
    this.http.post(this.url,emp).subscribe()
  }
  // for edit variable
  BtnName="Submit"
  BtnHide=false
  Id_Hide=true;

  UpdateData(emp){
    this.http.put(this.url+"/"+emp.id,emp).subscribe()
  }
}
