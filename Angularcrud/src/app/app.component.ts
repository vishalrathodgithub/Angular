import { Component } from '@angular/core';
import { Area } from './model/area';
import { City } from './model/city';
import { State } from './model/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newangular';
  states:State[]=[{
    statename:"Maharastra",
    cities:[{cityname:"pune",
    areas:[{areaname:"karvenagar"},
    {areaname:"shivajinagar"}]
  },{cityname:"nagpur",
  areas:[{areaname:"jijamatanagar"}]
   }]
  }]
}