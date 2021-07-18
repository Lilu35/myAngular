import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";
import {products} from "../data/product.data";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = products[0];
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClick(){
    this.addProduct.emit(this.product);
  }



}
