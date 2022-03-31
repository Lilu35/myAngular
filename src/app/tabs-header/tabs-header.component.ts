import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-tabs-header',
  template: `
    <div class="tabs__header">
        <div class="tabs__header-content">
            <div class="tabs__title-prefix">
                <ng-content select="app-icon"></ng-content>
            </div>
            <div class="tabs__title">
                <ng-content select=".title-03"></ng-content>
            </div>
        </div>        
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="tabs__icon">
            <path
                d="M6 9L12 15L18 9"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>         
  `,
  styles: [
    `:host { display: inline-block; }
    .tabs__title-prefix:not(:empty) {margin-right: 24px;}`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsHeaderComponent implements OnInit {
  public isOpen = false;
  public click$: Observable<Event> = fromEvent(this.host.nativeElement,'click');

  constructor(private host: ElementRef) { }

  ngOnInit(): void {
  }

}
