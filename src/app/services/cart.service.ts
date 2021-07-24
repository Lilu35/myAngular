import { Injectable } from '@angular/core';
import {Product} from "../types/card";
import {CatalogService} from "./catalog.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private inCart: Array<any> = [];
  private countProducts: number = 0;
  cartIsOpened: boolean = false;

  constructor() { }

  addProduct(product: Product){
    const qty = this.inCart.filter(x => x.product === product).length ?? 0;
    if (qty === 0){
      this.inCart.push({qty: 1, product: product});
    } else {
      const p = this.inCart.find(x => x.product === product);
      p.qty = p.qty + 1;
    }
    this.countProducts++;
  }

  removeProduct(id: number){
    const q = this.inCart.find(x => x.product.id === id).qty;
    this.inCart = this.inCart.filter(x => x.product.id != id);
    if (this.inCart.length === 0){
      this.cartIsOpened = false;
    }
    this.countProducts -= q;
  }

  getCart(){
    return this.inCart;
  }

  getCount(){
    return this.countProducts;
  }

  getClear(){
    this.inCart = [];
    this.cartIsOpened = false;
    this.countProducts = 0;
  }

}
