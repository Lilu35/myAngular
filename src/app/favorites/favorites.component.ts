import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {FavoriteService} from "../services/favorite.service";
import {Observable} from "rxjs";
import {ProductSB} from "../types/card";
import {select, Store} from "@ngrx/store";
import * as fromFavorite from "./store/reducers";
import {FavoriteSelectors} from "./store/selectors";
import {addProduct, clickToFavorite, deleteProduct, clearFavorite} from "./store/actions/favorite.actions";

@Component({
  selector: 'app-favorites',
  template: `
      <div>
          <app-button class="favorite" [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-heart'"></app-button>
          <app-bage class="bage-favorite" [num]="totalQty$|async"></app-bage>                    
      </div>
      <div class="favorite-window" *ngIf="(favoriteIsOpen$|async)">
          <app-button [style.float]="'right'" [color]="'primary'" [text]="''" (click)="onClick()" [withIcon]="true" [iconClass]="'fa fa-times-circle'"></app-button>
          <span>В избранном {{this.totalQty$|async}} шт товаров</span>
          <br/>
          <div [style.padding]="'10px 10px 10px 10px'">
              <table>
                  <tr *ngFor="let item of productsInFavorite$|async">
                      <td><strong>{{item.title}}</strong></td>
                      <td><app-button [color]="'primary'" [text]="''" (click)="removeProduct(item)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
                  </tr>
              </table>
          </div>
          <app-button [text]="'Очистить избранное'" (click)="clearFavorite()" [color]="'lightsalmon'" [ngStyle]="{marginLeft:'10px'}"></app-button>
      </div>
  `,
  styles: [`
      li {list-style-type: none;}
      .favorite-window {position: absolute; background-color: #fff; box-shadow: 0 2px 4px rgb(0 0 0 / 15%); 
                        width: 280px; top: 48px; padding: 12px 16px; right: 0px;}
      .favorite {position: absolute; top: 20px; right: 85px;}
      .bage-favorite {position: absolute; top: 10px; right: 75px; background: darkseagreen;border-radius: 10px; text-align: center; width: 20px;}
  `]
})
export class FavoritesComponent implements OnInit {
  public productsInFavorite$: Observable<Array<ProductSB>> = this.store.pipe(select(FavoriteSelectors.selectProductsInFavorite));
  public totalQty$: Observable<number> = this.store.pipe(select(FavoriteSelectors.selectCountProductsInFavorite));
  public favoriteIsOpen$: Observable<boolean> = this.store.pipe(select(FavoriteSelectors.selectFavoriteIsOpen));

  constructor(private store: Store<fromFavorite.Favorite>) { }

  ngOnInit(): void {
  }

  onClick():void{
    this.store.dispatch(clickToFavorite());
  }

  public addToFavorite(product: ProductSB):void{
    this.store.dispatch(addProduct({product}));
  }

  public removeProduct(product: ProductSB):void{
    this.store.dispatch(deleteProduct({product}));
  }

  public clearFavorite():void{
    this.store.dispatch(clearFavorite());
  }

}
