import { Component } from '@angular/core';
import { Batch } from 'src/model/batch.model';
import { Batchdata } from 'src/assets/Batchdata.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vishalang';
  Batchinfo:Batch[]=Batchdata;
}
