import { Component, OnInit } from '@angular/core';
import {ProductSB, Toggle} from "../types/card";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>Список товаров</h1></div>
      <button>сортировать:</button>
      <app-button-sort [ngStyle]="{backgroundColor:'title'===this.productsService.active?'lightsalmon':'white'}" (click)="this.productsService.orderBy('title')" [text]="'по наименованию'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'company'===this.productsService.active?'lightsalmon':'white'}" (click)="this.productsService.orderBy('company')" [text]="'по производителю'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'price'===this.productsService.active?'lightsalmon':'white'}" (click)="this.productsService.orderBy('price')" [text]="'по цене'"></app-button-sort>
      <table>
          <tr>
              <th>id</th>
              <th>Наименование</th>
              <th>Производитель</th>
              <th>Цена</th>
              <th>Рейтинг</th>
              <th>Фото</th>
          </tr>
          <tr *ngFor="let p of this.productsService.productsOnThisPage">
              <td>{{p.id}}</td>
              <td>{{p.title}}</td>
              <td>{{p.company}}</td>
              <td>{{p.price|currency:'RUB':'symbol-narrow'}}</td>
              <td>{{p.rating}}</td>
              <td><img class="catalog-image" src="{{p.image}}"></td>
          </tr>
      </table>
      <app-button [text]="'Загрузить еще'" (click)="this.productsService.addPages()" [isDisabled]="this.productsService.disabled"></app-button>  
      
  `,
  styles: [ 'td,th{border-color: darksalmon;border-bottom-style: solid;border-width: thin}','table{text-align: center;padding: 10px 10px 10px 10px;}',
    'button{border-style: hidden; background-color: white;}','img{height: 40px;}'
  ]
})
export class HomePageComponent implements OnInit {


  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts$(this.productsService.queryParams).subscribe(result => this.productsService.productsOnThisPage = result.items);
    this.productsService.products = this.productsService.productsOnThisPage;
  }

}
