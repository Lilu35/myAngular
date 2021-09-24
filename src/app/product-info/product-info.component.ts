import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-info',
  template: `
      <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
