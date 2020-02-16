import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor() { }
  public num1:number;
  public num2:number;
  public result:number;

  addition(){
    this.result = (this.num1) +( this.num2) ;
  }

}
