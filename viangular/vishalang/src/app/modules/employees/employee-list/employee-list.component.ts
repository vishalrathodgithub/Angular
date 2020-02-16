import { Component, OnInit } from '@angular/core';
import { Batchdata } from 'src/assets/Batchdata.const';
import { Batch } from 'src/model/batch.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //Batchinfo:Batch[]=Batchdata;

  constructor(private shared:SharedService) { }

  ngOnInit() {
  }

}
