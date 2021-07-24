import {Component, EventEmitter, OnInit, Optional, Output} from '@angular/core';
import {Product, Toggle} from "../types/card";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {products} from "../data/product.data";
import {CatalogService} from "../services/catalog.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-catalog',
  template: `
      <router-outlet></router-outlet>
      <app-cart></app-cart> 
      <app-toggle [toggles]="toggles" (toggleChanged)="filter($event)"></app-toggle>
        <app-product-card
            *ngFor="let p of filteredProducts"
            [product] = "p" > 
        </app-product-card>              
          `,
  styles: ['li {list-style-type: none;display: inline-block;margin-right: 50px;}']
})
export class CatalogComponent implements OnInit {
  products: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  toggles: Array<any> = [{value:'none',label:'Показать все'},{value:'available',label:'В наличии'},{value:'actionPrice',label:'Со скидкой'}];

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private catalogService: CatalogService, public cartService: CartService) {
  }

  ngOnInit(): void {
    this.dataService.setData(products);
    this.products = this.dataService.getData();
    this.filteredProducts = this.dataService.getData();
  }

  filter(item: Toggle) {
    this.filteredProducts = this.catalogService.getProducts(item);
  }

}
