import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <ng-content></ng-content>
    </div>    
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
