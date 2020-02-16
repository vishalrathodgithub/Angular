import { Injectable } from '@angular/core';
import { Employee } from 'src/model/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  employee1:Employee={
    id:null,
    first:'',
    last:'',
    designation:''
  }
  empReset:Employee={
    id:null,
    first:'',
    last:'',
    designation:''
  }
  url:string="http://localhost:3000/Employee";
  btnHide:boolean=false;
  hide:boolean=true;
  btnName:string="Submit";
  EmployeeDetails:Employee[];
  getData(){
    this.http.get(this.url).subscribe((data:Employee[])=>
    {this.EmployeeDetails=data}
    );
  }
  delete2(emp:Employee)
  {
    this.http.delete(this.url+"/"+emp.id).subscribe();
  }
  submit(emp:Employee){
    this.http.post (this.url,emp).subscribe();
  }
  update(emp:Employee)
  {
    this.http.put (this.url+"/"+emp.id,emp).subscribe();
  }
}
  

