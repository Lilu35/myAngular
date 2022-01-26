import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiplier',
  template: `    
<!--    <button (click)="multiply()" data-id="multiplyBtn">умножить на 2</button>-->
<!--    <button (click)="divide()" data-id="divideBtn">разделить на 2</button>     -->
<!--    <div id="value">{{count}}</div>-->
  `,
  styles: []
})
export class MultiplierComponent implements OnInit {
  public count: number = 1;

  @Input() set start(startCount: number){
    this.count = startCount;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public multiply(){
    this.count = this.count * 2;
  }

  public divide(){
    this.count = this.count / 2;
  }

}
