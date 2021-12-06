import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
      <app-button (click)="onClose()" [text]="'Нажми'" [color]="'gold'"></app-button>
      <div *ngIf="this.opened">
          <p>Попробуй кликнуть вне элемента</p>
          <menu>
              <p *ngFor="let option of menuList">
                  {{option}}
              </p>
          </menu>
      </div>  
  `,
  styles: ['div{border-style: solid; width: 250px; border-radius: 15px;}']
})
export class SelectComponent implements OnInit {
  @Input() opened: boolean = false;
  menuList = ["option 1","option 2","option 3"];

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    console.log("close");
    this.opened = !this.opened;
  }

}
