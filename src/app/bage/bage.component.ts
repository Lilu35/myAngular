import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bage',
  template: `
      <span *ngIf="num > 0">{{num}}</span>
  `,
  styles: ['span{position: absolute;left: 40px; background: darkseagreen;border-radius: 10px; text-align: center; width: 20px;}']
})
export class BageComponent implements OnInit {
  @Input() num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
