import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductSB} from "../types/card";
import {CartService} from "../services/cart.service";
import {Store} from "@ngrx/store";
import * as fromCart from './store/reducers'
import {addProduct} from "./store/actions/cart.actions";
import {User} from "../store/reducers/user.reducers";
import {signInSuccess} from "../store/actions/user.actions";

@Component({
  selector: 'app-cart',
  template: `
    <div>
        <div>
            <app-button class="cart" [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-shopping-cart'"></app-button>
            <app-bage [num]="this.cartService.getCount()"></app-bage>
        </div>
        <div class="cart-window" *ngIf="(this.cartService.cartIsOpened && this.cartService.getCount() > 0) || (this.cartService.cartIsOpened && this.inCart > 0)">
            <app-button [style.float]="'right'" [color]="'primary'" [text]="''" (click)="this.cartService.cartIsOpened=!this.cartService.cartIsOpened" [withIcon]="true" [iconClass]="'fa fa-times-circle'"></app-button>
            <span>В корзине {{this.cartService.getCount()}} тов. на сумму {{this.cartService.sum|currency:'RUB':'symbol-narrow'}}</span>
            <br/>
            <div [style.padding]="'10px 10px 10px 10px'">
                <table>
                    <tr *ngFor="let c of this.cartService.getCart()">
                        <td><strong>{{c.product.name}} - {{c.qty}} шт</strong></td>
                        <td><app-button [color]="'primary'" [text]="''" (click)="this.cartService.removeProduct(c.product.id)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
                    </tr>
                </table>
            </div>
            <app-button [text]="'Оформить заказ'" (click)="this.cartService.getClear()" [color]="'gold'" [withIcon]="true" [ngStyle]="{marginLeft:'10px'}"></app-button>
            <app-button [text]="'Очистить корзину'" (click)="this.cartService.getClear()" [color]="'lightsalmon'" [ngStyle]="{marginLeft:'10px'}"></app-button>
        </div>
    </div>    
    
  `,
  styles: [`
     li {list-style-type: none;}
     .cart-window {position: absolute; background-color: #fff; box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
                   width: 280px; top: 48px; padding: 12px 16px; right: 0px;}
     .cart {position: absolute; top: 10px; right: 35px;}
  `]
})
export class CartComponent implements OnInit {
  @Input() inCart: number = 0;

  constructor(public cartService: CartService, private store: Store<fromCart.Cart>) { }

  ngOnInit(): void {
  }

  onClick(){
    if (this.cartService.getCount() > 0 || this.inCart > 0){
      this.cartService.cartIsOpened = !this.cartService.cartIsOpened;
    }
  }

  public addToCart(product: ProductSB){
    this.store.dispatch(addProduct({product}));
  }

}
