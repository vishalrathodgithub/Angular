import { Injectable } from '@angular/core';
import { Student } from 'src/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentallService {
  studentadd:Student[]=[{
    id:1,
    name:"surya",
    marks:67,
    address:"pune"
  },
  {
    id:1,
    name:"surya",
    marks:67,
    address:"pune"
  },
  {
    id:1,
    name:"surya",
    marks:67,
    address:"pune"
  },
  {
    id:1,
    name:"aarya",
    marks:67,
    address:"pune"


  },
    {
      id:1,
    name:"virya",
    marks:67,
    address:"pune"

    }]

  constructor() { }
}
