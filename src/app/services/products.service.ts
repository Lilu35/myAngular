import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductInfo, ProductSB} from "../types/card";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class ProductsService {
  private url =`${environment.api}/products`;
  private _products: Array<ProductSB> = [];
  private _queryParams = {};
  private page: number = 1;
  private typeOrder: string = 'none';
  private _disabled: boolean = false;
  private _productsOnThisPage$: Array<ProductSB>  = [];
  private _menuList = ['по наименованию','по производителю','по цене'  ];
  private _selected: string = this._menuList[0];

  constructor(private http:HttpService, private _router: Router, public _route: ActivatedRoute) {
  }

  getProducts$(queryParams: {[key: string]:string}):Observable<ProductInfo>{
    const params = new HttpParams({fromObject:queryParams});
    return this.http.get<ProductInfo>(this.url,{params});
  }

  orderBy(item:string){
    this.applyQuery({orderBy:item});
    this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage$ = result.items);
  }

  public applyQuery(params:{[key:string]:string}):void{
    this.queryParams = {
      ... this.queryParams,
      ... params};
  }

  addPages(){
    console.log(this.page);
    if (this.page < 6){
      this.page++;
      this.applyQuery({page: this.page.toString()});
      this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage$ = result.items);
      this.products = this.products.concat(this.productsOnThisPage$);
    }
    if (this.page === 6){
      this.disabled = true;
    }
    this._router.navigate(['.'],{relativeTo: this._route, queryParams: this.queryParams});
    console.log(this.products);
  }

  changeSortType(item: string){
    let i = this._menuList.indexOf(item);
    this.selected = this._menuList[i];
    let type = item === 'по наименованию'?'title':(item === 'по производителю'?'company':'price');
    this.typeOrder = type;
    this.orderBy(type);
    this._router.navigate(['.'],{relativeTo: this._route, queryParams: this.queryParams});
  }

  getParameters(){
    let order = this._route.snapshot.queryParams['orderBy'];
    let page = this._route.snapshot.queryParams['page'];
    if (order){
      this.applyQuery({orderBy:order});
      this.selected = order === 'title'?'по наименованию':(order === 'company'?'по производителю':'по цене');
    }
    if (page){
      this.applyQuery({page:page});
    }
  }

  get menuList(): string[] {
    return this._menuList;
  }
  set menuList(value: string[]) {
    this._menuList = value;
  }
  get selected(): string {
    return this._selected;
  }
  set selected(value: string) {
    this._selected = value;
  }
  get productsOnThisPage$(): Array<ProductSB> {
    return this._productsOnThisPage$;
  }
  set productsOnThisPage$(value: Array<ProductSB>) {
    this._productsOnThisPage$ = value;
  }
  get queryParams(): {} {
    return this._queryParams;
  }
  set queryParams(value: {}) {
    this._queryParams = value;
  }
  get products(): Array<ProductSB> {
    return this._products;
  }
  set products(value: Array<ProductSB>) {
    this._products = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }

}
