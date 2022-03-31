import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnInit
} from '@angular/core';
import {TabsHeaderComponent} from "../tabs-header/tabs-header.component";
import {TabsBodyComponent} from "../tabs-body/tabs-body.component";
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-tabs',
  template: `
    <div [ngClass]="{active: isOpen}">
        <ng-content select="app-tabs-header"></ng-content>
        <ng-content select="app-tabs-body"></ng-content>        
    </div>    
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit,AfterContentInit,DoCheck {
  public isOpen = true;

  @ContentChild(TabsHeaderComponent)
  public headerComponent!: TabsHeaderComponent;

  @ContentChild(TabsBodyComponent)
  public bodyComponent!: TabsBodyComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.headerComponent);
    console.log(this.bodyComponent);
  }

  public toggle():void{
    this.isOpen = !this.isOpen;
    this.bodyComponent.isOpen = this.isOpen;
  }

  ngDoCheck(): void {

  }

}
