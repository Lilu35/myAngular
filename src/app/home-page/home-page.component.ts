import { Component, OnInit } from '@angular/core';
import {ProductSB, Toggle} from "../types/card";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>Список товаров</h1></div>
      <button>сортировать:</button>
      <app-button-sort [ngStyle]="{backgroundColor:'title'===this.active?'lightsalmon':'white'}" (click)="applyQuery({orderBy:'title'})" [text]="'по наименованию'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'company'===this.active?'lightsalmon':'white'}" (click)="applyQuery({orderBy:'company'})" [text]="'по производителю'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'price'===this.active?'lightsalmon':'white'}" (click)="applyQuery({orderBy:'price'})" [text]="'по цене'"></app-button-sort>
      <table>
          <tr>
              <th>Наименование</th>
              <th>Производитель</th>
              <th>Цена</th>
          </tr>
          <tr *ngFor="let p of products"><td>{{p.title}}</td><td>{{p.company}}</td><td>{{p.price|currency:'RUB':'symbol-narrow'}}</td></tr>
      </table>
      
  `,
  styles: [ 'td,th{border-color: darksalmon;border-bottom-style: solid;border-width: thin}','table{text-align: center}','button{border-style: hidden; background-color: white;}'
  ]
})
export class HomePageComponent implements OnInit {
  public products: Array<ProductSB> = [];
  active: string = '';
  private queryParams = {};

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts$(this.queryParams).subscribe(result => this.products = result.items)
  }

  public applyQuery(params:{[key:string]:string}):void{
    if (params['orderBy']){
      this.active =params['orderBy'];
    }
    this.queryParams = {
      ... this.queryParams,
      ... params};
    this.productsService.getProducts$(this.queryParams).subscribe(result => this.products = result.items);
  }

}
