import {Component, Input, OnInit} from '@angular/core';

type triggerType = 'click'|'hover';

@Component({
  selector: 'app-drop-down-menu',
  template: `
    <div>
      <app-button [text]="btnText" [isActive]="false" [size]="'large'" (click)="onClick()" (mouseenter)="openMenu()" (mouseleave)="closeMenu()"></app-button>
    </div>
    <div *ngIf="isOpen">
        <app-menu>
            <p *ngFor="let option of menuList">
                {{option}}
            </p>
        </app-menu>        
    </div>
  `,
  styles: [
  ]
})
export class DropDownMenuComponent implements OnInit {

  @Input() trigger: triggerType = "hover";
  @Input() btnText: string = 'DropDownMenuBtn ("+this.trigger+")';
  @Input() menuList = ["option 1","option 2","option 3"];
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    if (this.trigger === "click"){
      this.isOpen = ! this.isOpen;
    }
  }

  openMenu(): void{
    if (this.trigger === "hover"){
      this.isOpen = true;
    }
  }

  closeMenu(): void{
    if (this.trigger === "hover"){
      this.isOpen = false;
    }
  }

}
