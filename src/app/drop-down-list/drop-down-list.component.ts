import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  template: `
      <select>
          <option *ngFor="let item of menuList">{{item}}</option>
      </select>
  `,
  styles: [
  ]
})
export class DropDownListComponent implements OnInit {
  @Input() menuList = ["option 1","option 2","option 3"];

  constructor() { }

  ngOnInit(): void {
  }

}
