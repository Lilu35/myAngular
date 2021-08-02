import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductInfo, ProductSB} from "../types/card";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ProductsService {
  url =`${environment.api}/products`;
  public products: Array<ProductSB> = [];
  queryParams = {};
  active: string = '';
  page: number = 1;
  disabled: boolean = false;
  productsOnThisPage: Array<ProductSB>  = [];

  constructor(private http:HttpService) { }

  getProducts$(queryParams: {[key: string]:string}):Observable<ProductInfo>{
    const params = new HttpParams({fromObject:queryParams});
    return this.http.get<ProductInfo>(this.url,{params});
  }

  orderBy(item:string){
    this.applyQuery({orderBy:item});
    this.getProducts$(this.queryParams).subscribe(result => this.productsOnThisPage = result.items);
    console.log(this.products);
  }

  public applyQuery(params:{[key:string]:string}):void{
    if (params['orderBy']){
      this.active = params['orderBy'];
    }
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
    console.log(this.products);
  }

}
