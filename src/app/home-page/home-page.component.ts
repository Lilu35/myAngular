import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {from, fromEvent, Observable} from "rxjs";
import {ProductSB} from "../types/card";
import {debounceTime, distinctUntilChanged, filter, pluck, switchMap, tap, toArray} from "rxjs/operators";

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>Список товаров</h1></div>
      <input type="text" placeholder="Поиск..." id="search" />
      <div *ngIf="searchResult$|async as searchResult">
          <ng-container *ngIf="searchResult.length > 0;else notFound">
              <div *ngFor="let result of searchResult">
                  {{result.title}}
              </div>
          </ng-container>        
          <ng-template #notFound>
              <div>Не найдено</div>
          </ng-template>
      </div>
      <button>сортировать:</button>
      <select #typeOrder (change)="this.productsService.changeSortType(typeOrder.value)">
          <option [selected]="this.productsService.selected == item"
                  *ngFor="let item of this.productsService.menuList">{{item}}</option>
      </select>
      <table>
          <tr>
              <th>id</th>
              <th>Наименование</th>
              <th>Производитель</th>
              <th>Цена</th>
              <th>Рейтинг</th>
              <th>Фото</th>
          </tr>
          <tr *ngFor="let p of this.productsService.productsOnThisPage$">
              <td>{{p.id}}</td>
              <td>{{p.title}}</td>
              <td>{{p.company}}</td>
              <td>{{p.price|currency:'RUB':'symbol-narrow'}}</td>
              <td>{{p.rating}}</td>
              <td><img class="catalog-image" src="{{p.image}}"></td>
          </tr>
      </table>
      <app-button [text]="'Загрузить еще'" (click)="this.productsService.addPages()"
                  [isDisabled]="this.productsService.disabled"></app-button>

  `,
  styles: [ 'td,th{border-color: darksalmon;border-bottom-style: solid;border-width: thin}','table{text-align: center;padding: 10px 10px 10px 10px;}',
    'button{border-style: hidden; background-color: white;}','img{height: 40px;}','input{margin: 10px;}'
  ]
})
export class HomePageComponent implements OnInit {
  public searchResult$: Observable<Array<ProductSB>> | undefined;

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getParameters();
    this.productsService.getProducts$(this.productsService.queryParams).subscribe(result => this.productsService.productsOnThisPage$ = result.items);
    this.productsService.products = this.productsService.productsOnThisPage$;
    const search = document.querySelector('#search');
    // @ts-ignore
    this.searchResult$ = fromEvent(search,'input').pipe(
      pluck('target','value'),
      debounceTime(300),
      // @ts-ignore
      distinctUntilChanged(),
      switchMap((searchTerm:string) => this.searchProduct(searchTerm.toLocaleLowerCase())),
      tap((v) => console.log(v))
    )
  }

  public searchProduct(searchTerm: string):Observable<Array<ProductSB>>{
    return from(this.productsService.productsOnThisPage$).pipe(
      filter((product) => product.title.toLocaleLowerCase().indexOf(searchTerm) !== -1),
      toArray()
    )
  }

}
