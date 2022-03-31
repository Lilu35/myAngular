import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabsComponent} from "../tabs/tabs.component";
import {merge, Observable} from "rxjs";
import {mapTo, tap} from "rxjs/operators";

@Component({
  selector: 'app-tabs-group',
  template: `
    <div>
        <ng-content></ng-content>    
    </div>    
  `,
  styles: [
    `:host{display: block;}`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsGroupComponent implements OnInit,AfterContentInit {
  @ContentChildren(TabsComponent)
  public components!: QueryList<TabsComponent>;

  ngAfterContentInit(): void {
    const clicks$: Array<Observable<TabsComponent>> = this.components.map(tabs => tabs.headerComponent.click$.pipe(mapTo(tabs)));
    merge(...clicks$).pipe(tap(c=>console.log(c))).subscribe(tabs=>tabs.toggle());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
