import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-sort',
  template: `
      <button [class]="buttonClass()" (mouseover)="activeBtn()" (mouseleave)="activeBtn()">{{text}}</button>
  `,
  styleUrls: ['./button-sort.component.scss']
})
export class ButtonSortComponent implements OnInit {
  @Input() text: string = 'button';
  @Input() isActive: boolean = false;

  ngOnInit(): void { }

  buttonClass(): string{
    return this.isActive? 'active': '';
  }

  activeBtn(){
    this.isActive = !this.isActive;
  }

}
