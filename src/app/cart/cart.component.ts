import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";

@Component({
  selector: 'app-cart',
  template: `
    <div>
        <app-button [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-shopping-cart'"></app-button> 
        <app-bage [num]="numberOfProducts"></app-bage>
    </div>
    <div *ngIf="opened && cart.length > 0" [ngStyle]="{border:'3px solid gold',width:'350px',borderRadius:'20px',padding:'10px'}">
        <app-button [style.float]="'right'" [color]="'primary'" [text]="''" (click)="this.opened=!this.opened" [withIcon]="true" [iconClass]="'fa fa-times-circle'"></app-button>    
        <span>В корзине {{cart.length}} тов. на сумму {{sum|currency:'RUB':'symbol-narrow'}}</span>
        <br/>
        <div [style.padding]="'10px 10px 10px 10px'">
            <table>
                <tr *ngFor="let c of cart">
                    <td><strong>{{c.product.name}} - {{c.qty}} шт</strong></td>
                    <td><app-button [color]="'primary'" [text]="''" (click)="delete(c.product)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
                </tr>
            </table>    
        </div>        
        <app-button [text]="'Оформить заказ'" (click)="clear()" [color]="'gold'" [withIcon]="true" [ngStyle]="{marginLeft:'10px'}"></app-button>
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
    if (this.cart.length > 0){
      this.opened = !this.opened;
    }
  }

  get sum(): number{
    let sum = 0;
    for (let c of this.cart){
      sum += c.product.cost*c.qty;
    }
    return sum;
  }

  get numberOfProducts(): number{
    let num = 0;
    for (let c of this.cart){
      num += c.qty;
    }
    return num;
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
