import { Component, OnInit } from '@angular/core';
import {ProductSB, Toggle} from "../types/card";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>Список товаров</h1></div>
      <button>сортировать:</button>
      <app-button-sort [ngStyle]="{backgroundColor:'title'===this.active?'lightsalmon':'white'}" (click)="orderBy('title')" [text]="'по наименованию'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'company'===this.active?'lightsalmon':'white'}" (click)="orderBy('company')" [text]="'по производителю'"></app-button-sort>
      <app-button-sort [ngStyle]="{backgroundColor:'price'===this.active?'lightsalmon':'white'}" (click)="orderBy('price')" [text]="'по цене'"></app-button-sort>
      <table>
          <tr>
              <th>Наименование</th>
              <th>Производитель</th>
              <th>Цена</th>
          </tr>
          <tr *ngFor="let p of productsOnThisPage"><td>{{p.title}}</td><td>{{p.company}}</td><td>{{p.price|currency:'RUB':'symbol-narrow'}}</td></tr>
      </table>
      <app-button [text]="'Загрузить еще'" (click)="addPages()" [isDisabled]="disabled"></app-button>  
      
  `,
  styles: [ 'td,th{border-color: darksalmon;border-bottom-style: solid;border-width: thin}','table{text-align: center;padding: 10px 10px 10px 10px;}','button{border-style: hidden; background-color: white;}'
  ]
})
export class HomePageComponent implements OnInit {
  active: string = '';
  page: number = 1;
  disabled: boolean = false;
  private queryParams = {};
  productsOnThisPage: Array<ProductSB>  = [];

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
    this.productsService.products = this.productsOnThisPage;
  }

  addPages(){
    console.log(this.page);
    if (this.page < 6){
      this.page++;
      this.applyQuery({page: this.page.toString()});
      this.productsService.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
      this.productsService.products = this.productsService.products.concat(this.productsOnThisPage);
    }
    if (this.page === 6){
      this.disabled = true;
    }
    console.log(this.productsService.products);
  }

  orderBy(item:string){
    this.applyQuery({orderBy:item});
    this.productsService.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
    console.log(this.productsService.products);
  }

  public applyQuery(params:{[key:string]:string}):void{
    if (params['orderBy']){
      this.active = params['orderBy'];
    }
    this.queryParams = {
      ... this.queryParams,
      ... params};
  }

}
