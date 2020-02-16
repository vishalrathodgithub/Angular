import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Student } from 'src/model/Student.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/Student";
  StuDetails:Student[];
  getData(){
    this.http.get(this.url).subscribe((data:Student[])=>{this.StuDetails=data})
  }
  deletestudent(stud:Student){
    this.http.delete(this.url+"/"+stud.id).subscribe();
  }
  deletedata(stud:Student){
    this.http.delete(this.url+"/"+stud.id).subscribe()
  }
  Student1:Student={
    id:null,
    name:'',
    addr:'',
    marks:0
  }

  ResetStudent:Student={
    id:null,
    name:'',
    addr:'',
    marks:0
  }
  submit(stud:Student){
    this.http.post(this.url,stud).subscribe()
  }
  BtnName="Submit"
  ResetBtnHide=false
  Id_Hide=true
  
  Update(stud:Student){
    this.http.put(this.url+"/"+stud.id,stud).subscribe()
  }


}
