import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductInfo, ProductSB} from "../types/card";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class ProductsService {
  url =`${environment.api}/products`;
  public products: Array<ProductSB> = [];
  queryParams = {};
  active: string = '';
  page: number = 1;
  typeOrder: string = 'none';
  disabled: boolean = false;
  productsOnThisPage: Array<ProductSB>  = [];

  constructor(private http:HttpService, private router: Router, public route: ActivatedRoute) {
  }

  getProducts$(queryParams: {[key: string]:string}):Observable<ProductInfo>{
    const params = new HttpParams({fromObject:queryParams});
    return this.http.get<ProductInfo>(this.url,{params});
  }

  orderBy(item:string){
    this.applyQuery({orderBy:item});
    this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
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
      this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
      this.products = this.products.concat(this.productsOnThisPage);
    }
    if (this.page === 6){
      this.disabled = true;
    }
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: this.queryParams});
    console.log(this.products);
  }

  changeSortType(item: string){
    let type = item === 'по наименованию'?'title':(item === 'по производителю'?'company':'price');
    this.typeOrder = type;
    this.orderBy(type);
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: this.queryParams});
  }

  getParameters(){
    let order = this.route.snapshot.queryParams['orderBy'];
    let page = this.route.snapshot.queryParams['page'];
    if (order){
      this.applyQuery({orderBy:order});
    }
    if (page){
      this.applyQuery({page:page});
    }

  }

}
