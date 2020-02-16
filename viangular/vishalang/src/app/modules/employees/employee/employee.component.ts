import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/model/batch.model';
import { Batchdata } from 'src/assets/Batchdata.const';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 // Batchinfo:Batch[]=Batchdata;

  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

}
