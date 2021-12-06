import { Injectable } from '@angular/core';
import {Product} from "../types/card";
import {BehaviorSubject, from, Observable} from "rxjs";
import {state} from "@angular/animations";
import {filter, map, switchMap} from "rxjs/operators";

export interface FavoriteItem{
  product: Product
  qty: number
}
export interface FavoriteState{
  items: Array<FavoriteItem>
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private _state: FavoriteState = {items: [] as Array<FavoriteItem>};
  public state$: BehaviorSubject<FavoriteState>  = new BehaviorSubject(this._state);
  public productsInFavorite$: Observable<Array<FavoriteItem>> = this.state$.pipe(
    map((state: FavoriteState) => state.items)
  );
  public productsCount$: Observable<number> = this.state$.pipe(
    map((state: FavoriteState) => state.items.length)
  );
  public  total$: Observable<number> = this.productsInFavorite$.pipe(
    map((items:Array<FavoriteItem>) => items.map(item => item.qty)),
    map((items:Array<number>) => items.reduce((acc,curr)=>{acc=acc+curr;return acc},0))
  );
  favoriteIsOpened: boolean = false;

  public addToFavorite(product: Product):void{
    if (!this.isInFavorite(product)){
      this.createProduct(product);
    }
  }

  public removeFromFavorite(product: Product):void{
    if (this.isInFavorite(product)){
      this.changeQty(product,-1);
      this.removeZeroQty();
    }
  }

  protected updateState():void{
    this.state$.next({...this._state});
  }

  protected createProduct(product: Product):void{
    this._state = {
      ...this._state,
      items: [...this._state.items,{product,qty:1}]
    };
    this.updateState();
  }

  public getProductQty(product: Product):Observable<number>{
    return this.productsInFavorite$.pipe(
      switchMap((items: Array<FavoriteItem>) => from (items)),
      filter((item: FavoriteItem) => item.product.id === product.id),
      map((item: FavoriteItem) => item.qty)
    );
  }

  protected isInFavorite(product: Product):boolean{
    return this._state.items.some((item: FavoriteItem) => item.product.id === product.id);
  }

  protected changeQty(product:Product,value:number):void{
    this._state = {
      ...this._state,
      items:[
        ...this._state.items.map((item:FavoriteItem) => {
          if (item.product.id === product.id){
            return{
              ...item,
              qty: item.qty+value
            }
          }
          return item
        })
      ]
    };
    this.updateState();
  }

  private removeZeroQty(){
    this._state = {
      ...this._state,
      items:[...this._state.items.filter
      ((item) => item.qty !== 0)]
    };
    this.updateState();
  }

  public clearFavorite(){
    this._state = {items: [] as Array<FavoriteItem>};
    this.favoriteIsOpened = false;
    this.updateState();
  }

  constructor() { }
}
