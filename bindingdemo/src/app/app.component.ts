import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angdemo';
  name="cjc"
  Display(){

  //  return "Display method called"
  this.title = "vishal rathod" ; 
  }
  
  isdisabled=false;
}
