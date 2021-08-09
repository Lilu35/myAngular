import { Injectable } from '@angular/core';
import {ProductSB} from "../types/card";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  public productsCache: Map<string,Observable<any>> = new Map<string, Observable<any>>();

  constructor() { }

  addToCache(key:string,value:Observable<any>){
    this.productsCache.set(key,value);
  }

  getFromCash(key:string):Observable<any>{
    console.log("getFromCache return: ");
    console.log(this.productsCache.get(key));
    // @ts-ignore
    return this.productsCache.get(key);
  }

  makeKey(url:string,options?:{}):string{
    if (options){
      // @ts-ignore
      return  `${url}${options.params.map.get("page")?options.params.map.get("page")[0]:""}${options.params.map.get("orderBy")?options.params.map.get("orderBy")[0]:""}`;
    }
    return  url;
  }

}
