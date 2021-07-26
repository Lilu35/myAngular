import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  template: `
    <div>
        <app-button [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-shopping-cart'"></app-button> 
        <app-bage [num]="this.cartService.getCount()"></app-bage>
    </div>
    <div *ngIf="this.cartService.cartIsOpened && this.cartService.getCount() > 0" [ngStyle]="{border:'3px solid gold',width:'350px',borderRadius:'20px',padding:'10px'}">
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
    
  `,
  styles: ['li {list-style-type: none;}']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onClick(){
    if (this.cartService.getCount() > 0){
      this.cartService.cartIsOpened = !this.cartService.cartIsOpened;
    }
  }

}
