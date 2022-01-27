import {Component, EventEmitter, OnInit, Optional, Output} from '@angular/core';
import {Product, ProductInfo, ProductSB, Toggle} from "../types/card";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {products} from "../data/product.data";
import {CatalogService} from "../services/catalog.service";
import {CartService} from "../services/cart.service";
import {FavoriteService} from "../services/favorite.service";
import * as fromCatalog from './store/reducers'
import {select, Store} from "@ngrx/store";
import {ProductSelectors} from "./store/selectors";
import {CatalogPageActions} from "./store/actions";
import {Observable} from "rxjs";
import {User} from "../store/reducers/user.reducers";

@Component({
  selector: 'app-catalog',
  template: `
<!--      <router-outlet></router-outlet>-->
<!--      <app-cart></app-cart> -->
<!--      <app-favorites></app-favorites>-->
<!--      <app-toggle [toggles]="toggles" (toggleChanged)="filter($event)"></app-toggle>-->
<!--      <app-product-card-new *ngFor="let p of filteredProducts">-->
<!--          <app-product-info>-->
<!--              <h2>{{p.name}}</h2>-->
<!--              <h3>{{p.model}}</h3>-->
<!--              <img class="catalog-image" src="{{p.image}}">-->
<!--              <h3>{{p.cost|currency:'RUB':'symbol-narrow'}}</h3>-->
<!--          </app-product-info>-->
<!--          <app-button [text]="'В корзину'" (click)="this.cartService.addProduct(this.p)" [color]="'primary'" [size]="'large'"></app-button>-->
<!--          <app-button [text]="''" [withIcon]="true" (click)="this.favoriteService.addToFavorite(this.p)" [iconClass]="'fa fa-heart'" [color]="'primary'" [size]="'large'"></app-button>-->
<!--      </app-product-card-new>-->
      <router-outlet></router-outlet>
      <app-cart></app-cart>
      <app-favorites></app-favorites>
      <div class="catalog-block">
          <app-product-card-new class="catalog" *ngFor="let p of products$|async">
              <div class="product">
                  <app-product-info>
                      <h2>{{p.title}}</h2>
                      <h3>{{p.category}}</h3>
                      <img class="catalog-image" src="{{p.image}}">
                      <h3>{{p.price|currency:'RUB':'symbol-narrow'}}</h3>
                  </app-product-info>
                            <app-button [text]="'В корзину'" (click)="addToCart(this.p)" [color]="'primary'" [size]="'large'"></app-button>
                  <!--          <app-button [text]="''" [withIcon]="true" (click)="this.favoriteService.addToFavorite(this.p)" [iconClass]="'fa fa-heart'" [color]="'primary'" [size]="'large'"></app-button>-->
              </div>
          </app-product-card-new>
      </div>     
      
`,
  styles: [`
      .catalog-image{height: 120px;}
      .catalog {display: inline-block;}
      .product {width: 300px; margin-bottom: 50px; margin-top: 50px;}
      .catalog-block {margin-left: 50px;}
  `]
})
export class CatalogComponent implements OnInit {
  @Output() public onAddToCart: EventEmitter<ProductSB> = new EventEmitter<ProductSB>();
  public products$: Observable<Array<ProductSB>|null> = this.store.pipe(select(ProductSelectors.selectProducts));
  // products: Array<ProductSB> = [];
  // filteredProducts: Array<ProductSB> = [];
  // products: Array<Product> = [];
  // filteredProducts: Array<Product> = [];
  // toggles: Array<any> = [{value:'none',label:'Показать все'},{value:'available',label:'В наличии'},{value:'actionPrice',label:'Со скидкой'}];

  // constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService,
  //             private catalogService: CatalogService, public cartService: CartService, public favoriteService: FavoriteService) {
  // }
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromCatalog.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(CatalogPageActions.enter());
    }

  public addToCart(product: ProductSB):void{
    this.onAddToCart.emit(product);
  }

    // this.dataService.setData(products);
    // this.products = this.dataService.getData();
    // this.filteredProducts = this.dataService.getData();

  // filter(item: Toggle) {
  //   this.filteredProducts = this.catalogService.getProducts(item);
  // }

}
