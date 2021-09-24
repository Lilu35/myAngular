import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card-new',
  template: `
      <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class ProductCardNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
