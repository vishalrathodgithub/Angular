import { Component } from '@angular/core';
import { Batch } from './model/Batch.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
   export class AppComponent{
     title='Python Batch';
     Batchdata:Batch={
       bid:1,
       bname:"vishal",
       bcourse:"java"
  };

   }