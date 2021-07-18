import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";

@Component({
  selector: 'app-cart',
  template: `
    <div>
        <app-button [text]="'Корзина'" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-shopping-cart'"></app-button> 
        <app-bage [num]="numberOfProducts"></app-bage>
    </div>
    <div *ngIf="opened && cart.length > 0" [ngStyle]="{border:'3px solid gold',width:'350px',borderRadius:'20px',padding:'10px'}">
        <table>
            <tr *ngFor="let c of cart">
                <td><strong>{{c.product.name}} - {{c.qty}} шт</strong></td>
                <td><app-button [color]="'primary'" [text]="''" (click)="delete(c.product)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
            </tr>            
        </table>
        <app-button [text]="'Оформить заказ'" [color]="'gold'" [withIcon]="true" [ngStyle]="{marginLeft:'10px'}"></app-button>
        <app-button [text]="'Очистить корзину'" (click)="clear()" [color]="'lightsalmon'" [ngStyle]="{marginLeft:'10px'}"></app-button>
    </div>
    
  `,
  styles: ['li {list-style-type: none;}']
})
export class CartComponent implements OnInit {
  @Input() cart: Array<{qty:number,product:Product}> = [];
  @Input() opened: boolean = false;
  @Output() cartClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.opened = !this.opened;
  }

  get numberOfProducts(): number{
    let sum = 0;
    for (let c of this.cart){
      sum += c.qty;
    }
    return sum;
  }

  clear(){
    this.cartClear.emit(true);
    this.opened = false;
  }

  delete(p:Product){
    this.deleteProduct.emit(p);
    if (this.cart.length === 1){
      this.opened = false;
    }
  }

}
