import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

// type buttonColors = 'default'|'primary'|'accent'|'success'|'warning';
type buttonSize = 'default'|'small'|'large';

@Component({
  selector: 'app-button',
  template: `
    <button *ngIf="true" [class]="buttonClass()" [style.background-color]="color" [attr.disabled]="isDisabled ? '': null" [style.font-size]="size" (mouseover)="activeBtn()" (mouseleave)="activeBtn()"><i *ngIf="withIcon" class="{{iconClass}}"></i>{{text}}</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text: string = 'button';
  @Input() color: string = 'default';
  @Input() size: buttonSize = 'default';
  @Input() isActive: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() withIcon: boolean = false;
  @Input() iconClass: string = '';

  ngOnChanges(changes:SimpleChanges): void{

  }

  ngOnInit(): void { }

  buttonClass(): string{
    return this.isActive? 'active': '';
  }

  activeBtn(){
    this.isActive = !this.isActive;
  }

}
