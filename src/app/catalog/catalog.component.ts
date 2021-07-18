import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product, Toggle} from "../types/card";
import {products} from "../data/product.data";

@Component({
  selector: 'app-catalog',
  template: `
      <app-cart [cart]="inCart" (cartClear)="clearMyCart($event)" (deleteProduct)="deleteFromCart($event)"></app-cart>  
      <app-toggle [toggles]="[{value:0,label:'Показать все'},{value:1,label:'В наличии'},{value:2,label:'Со скидкой'}]" (toggleChanged)="filter($event)"></app-toggle>
      <ul>
          <li *ngFor="let p of filteredProducts">
              <app-product-card [product] = "p" (addProduct)="onAddProduct($event)"></app-product-card>              
          </li>
      </ul>`,
  styles: ['li {list-style-type: none;display: inline-block;margin-right: 50px;}']
})
export class CatalogComponent implements OnInit {
  products: Array<Product> = products;
  filteredProducts: Array<Product> = products;
  inCart: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onAddProduct($event: any) {
    const qty = this.inCart.filter(x => x.product === $event).length ?? 0;
    if (qty === 0){
      this.inCart.push({qty: 1, product: $event});
    } else {
      const p = this.inCart.find(x => x.product === $event);
      p.qty = p.qty + 1;
    }
  }

  filter(item: Toggle) {
    if (item.value === 0) {
      this.filteredProducts = this.products
    }
    if (item.value === 1) {
      this.filteredProducts = this.products.filter(x => x.available);
    }
    if (item.value === 2) {
      this.filteredProducts = this.products.filter(x => x.discount);
    }
  }

  clearMyCart(clear: boolean){
    if (clear){
      this.inCart = [];
    }
  }

  deleteFromCart(p: Product){
    this.inCart = this.inCart.filter(x => x.product.id !== p.id);
  }

}
