import {Component, Input, OnInit} from '@angular/core';
import {ProductSB} from "../types/card";
import {select, Store} from "@ngrx/store";
import * as fromCart from './store/reducers'
import {addProduct, clickToCart, deleteProduct} from "./store/actions/cart.actions";
import {Observable} from "rxjs";
import {CartSelectors} from "./store/selectors";

@Component({
  selector: 'app-cart',
  template: `
    <div>
        <div>
            <app-button class="cart" [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-shopping-cart'"></app-button>
            <app-bage class="bage-cart" [num]="countInCart$|async"></app-bage>
        </div>
        <div class="cart-window" *ngIf="cartIsOpen$|async">
            <app-button [style.float]="'right'" [color]="'primary'" [text]="''" (click)="onClick()" [withIcon]="true" [iconClass]="'fa fa-times-circle'"></app-button>
            <span>В корзине {{countInCart$|async}} тов. на сумму {{sumCart$|async|currency:'RUB':'symbol-narrow'}}</span>
            <br/>
            <div [style.padding]="'10px 10px 10px 10px'">
                <table>
                    <tr *ngFor="let p of productsInCart$|async">
                        <td><strong>{{p.product.title}} - {{p.qty}} шт</strong></td>
                        <td><app-button [color]="'primary'" [text]="''" (click)="removeProduct(p.product)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
                    </tr>
                </table>
            </div>
<!--            <app-button [text]="'Оформить заказ'" (click)="this.cartService.getClear()" [color]="'gold'" [withIcon]="true" [ngStyle]="{marginLeft:'10px'}"></app-button>-->
<!--            <app-button [text]="'Очистить корзину'" (click)="this.cartService.getClear()" [color]="'lightsalmon'" [ngStyle]="{marginLeft:'10px'}"></app-button>-->
        </div>
    </div>    
    
  `,
  styles: [`
     li {list-style-type: none;}
     .cart-window {position: absolute; background-color: #fff; box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
                   width: 280px; top: 48px; padding: 12px 16px; right: 0px;}
     .cart {position: absolute; top: 20px; right: 45px;}
     .bage-cart {position: absolute; top: 10px; right: 35px; background: darkseagreen;border-radius: 10px; text-align: center; width: 20px;}
  `]
})
export class CartComponent implements OnInit {
  public productsInCart$: Observable<Array<{qty:number,product:ProductSB}>> = this.store.pipe(select(CartSelectors.selectProductsInCart));
  public countInCart$: Observable<number> = this.store.pipe(select(CartSelectors.selectCountProductsInCart));
  public cartIsOpen$: Observable<boolean> = this.store.pipe(select(CartSelectors.selectCartIsOpen));
  public sumCart$: Observable<number> = this.store.pipe(select(CartSelectors.selectSumCart));

  constructor(private store: Store<fromCart.Cart>) { }

  ngOnInit(): void {
  }

  onClick():void{
    this.store.dispatch(clickToCart());
  }

  public addToCart(product: ProductSB):void{
    this.store.dispatch(addProduct({product}));
  }

  public removeProduct(product: ProductSB):void{
    this.store.dispatch(deleteProduct({product}));
  }

}
