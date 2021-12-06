import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {FavoriteService} from "../services/favorite.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-favorites',
  template: `
      <div>
          <app-button [text]="''" (click)="onClick()" [color]="'gold'" [withIcon]="true" [iconClass]="'fa fa-heart'"></app-button>
          <app-bage [num]="this.totalQty$|async"></app-bage>                    
      </div>
      <div *ngIf="(this.favoriteService.favoriteIsOpened) || (this.favoriteService.favoriteIsOpened)"
           [ngStyle]="{border:'3px solid gold',width:'350px',borderRadius:'20px',padding:'10px'}">
          <app-button [style.float]="'right'" [color]="'primary'" [text]="''" (click)="this.favoriteService.favoriteIsOpened=!this.favoriteService.favoriteIsOpened" [withIcon]="true" [iconClass]="'fa fa-times-circle'"></app-button>
          <span>В избранном {{this.totalQty$|async}} шт товаров</span>
          <br/>
          <div [style.padding]="'10px 10px 10px 10px'">
              <table>
                  <tr *ngFor="let item of this.favoriteService.productsInFavorite$|async">
                      <td><strong>{{item.product.name}}</strong></td>
                      <td><app-button [color]="'primary'" [text]="''" (click)="this.favoriteService.removeFromFavorite(item.product)" [withIcon]="true" [iconClass]="'fa fa-trash'"></app-button></td>
                  </tr>
              </table>
          </div>
          <app-button [text]="'Очистить избранное'" (click)="this.favoriteService.clearFavorite()" [color]="'lightsalmon'" [ngStyle]="{marginLeft:'10px'}"></app-button>
      </div>
  `,
  styles: ['li {list-style-type: none;}']
})
export class FavoritesComponent implements OnInit {
  @Input() inFavorite: number = 0;
  public totalQty$: Observable<number> = this.favoriteService.total$;

  constructor(public favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.favoriteService.favoriteIsOpened = !this.favoriteService.favoriteIsOpened;
  }

  closeCart(){
    this.favoriteService.favoriteIsOpened = false;
  }
}
