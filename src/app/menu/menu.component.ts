import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <ul>
          <li *ngFor="let option of menuList">
              {{option}}
          </li>
      </ul>
    </div>    
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  menuList = ["option 1","option 2","option 3"];

  constructor() { }

  ngOnInit(): void {
  }

}
