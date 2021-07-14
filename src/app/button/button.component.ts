import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

type buttonColors = 'default'|'primary'|'accent'|'success'|'warning';
type buttonSize = 'default'|'small'|'large';

@Component({
  selector: 'app-button',
  template: `
    <button [class]="buttonClass()" [style.background-color]="backgroundColor" [attr.disabled]="isDisabled ? '': null" [style.font-size]="size">{{text}}</button>
  `,
  styles: ['button{font-size: large}',
            '.active{font-style: italic; font-weight: bold;}']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text: string = 'button';
  @Input() color: buttonColors = 'default';
  @Input() size: buttonSize = 'default';
  @Input() isActive: boolean = false;
  @Input() isDisabled: boolean = false;

  ngOnChanges(changes:SimpleChanges): void{
    console.log('ngOnChanges',changes);
    if (this.isActive){
      this.color = "success";
      this.size = "large";
    } else {
      this.color = "warning";
      this.size = "small";
    }
  }

  ngOnInit(): void { }

  get backgroundColor(): string {
    switch (this.color){
      case "default":return "default";
      case "primary":return "blue";
      case "accent":return "yellow";
      case "success":return "green";
      case "warning":return "red";
      default: return "default";
    }
  }

  buttonClass(): string{
    return this.isActive? 'active': '';
  }

}
