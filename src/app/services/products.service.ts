import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {from, fromEvent, Observable} from "rxjs";
import {ProductInfo, ProductSB} from "../types/card";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {debounceTime, filter, pluck, switchMap, tap, toArray} from "rxjs/operators";
import {CacheService} from "./cache.service";

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
  private _selectedSearch: string = this._menuList[0];
  public searchResult$: Observable<Array<ProductSB>> | undefined;

  constructor(private http:HttpService, private _router: Router, public _route: ActivatedRoute, private cache: CacheService) {
  }

  getProducts$(queryParams: {[key: string]:string}):Observable<ProductInfo>{
    const params = new HttpParams({fromObject:queryParams});
    return this.cache.getProducts$(this.url,{params});
  }

  orderBy(item:string){
    this.applyQuery({orderBy:item});
    this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage$ = result.items);
    // @ts-ignore
    document.querySelector('#search').dispatchEvent(new Event('input'));
  }

  public applyQuery(params:{[key:string]:string}):void{
    this.queryParams = {
      ... this.queryParams,
      ... params};
  }

  addPages(){
    if (this.page < 6){
      this.page++;
      this.applyQuery({page: this.page.toString()});
      this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage$ = result.items);
      this.products = this.products.concat(this.productsOnThisPage$);
      // @ts-ignore
      document.querySelector('#search').dispatchEvent(new Event('input'));
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

  changeSearchType(item: string){
    let i = this._menuList.indexOf(item);
    this.selectedSearch = this._menuList[i];
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

  public searchProduct$(searchTerm: string):Observable<Array<ProductSB>>{
    if (this.selectedSearch === 'по производителю'){
      return from(this.productsOnThisPage$).pipe(
        tap((v) => console.log('поиск по производителю')),
        filter((product) => product.company.toLocaleLowerCase().indexOf(searchTerm) !== -1),
        toArray()
      )
    }
    if (this.selectedSearch === 'по цене'){
      return from(this.productsOnThisPage$).pipe(
        tap((v) => console.log('поиск по цене')),
        filter((product) => product.price.toString().indexOf(searchTerm) !== -1),
        toArray()
      )
    }
    return from(this.productsOnThisPage$).pipe(
      tap((v) => console.log('поиск по наименованию')),
      filter((product) => product.title.toLocaleLowerCase().indexOf(searchTerm) !== -1),
      toArray()
    )
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
  get selectedSearch(): string {
    return this._selectedSearch;
  }
  set selectedSearch(value: string) {
    this._selectedSearch = value;
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
