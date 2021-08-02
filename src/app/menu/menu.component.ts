import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <p *ngFor="let option of menuList">
          {{option}}
      </p>
    </div>    
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  @Input() menuList = ["option 1","option 2","option 3"];

  constructor() { }

  ngOnInit(): void {
  }

}
