import {Component, Input, OnInit} from '@angular/core';

type triggerType = 'click'|'hover';

@Component({
  selector: 'app-drop-down-menu',
  template: `
    <div>
      <app-button [text]="text" [isActive]="false" [size]="'large'" (click)="onClick()" (mouseenter)="openMenu()" (mouseleave)="closeMenu()"></app-button>
    </div>
    <div *ngIf="isOpen">
        <app-menu></app-menu>
    </div>
  `,
  styles: [
  ]
})
export class DropDownMenuComponent implements OnInit {

  @Input() trigger: triggerType = "hover";
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get text(): string{
    return "DropDownMenuBtn ("+this.trigger+")";
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
