import { Injectable } from '@angular/core';
import { Batch } from 'src/model/batch.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  employeeDetails:Batch[]=[{
    bid:1,
    bname:"raju",
    bcourse:"python"
  },
    {
      bid:1,
      bname:"raja",
      bcourse:"python"
    },
    {
      bid:67,
      bname:"ajay",
      bcourse:"python"
    },
      {
        bid:1,
        bname:"vishal",
        bcourse:"python"
  }];
  constructor() { }
}
