import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CacheService} from "./cache.service";
import {ProductSB} from "../types/card";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,private cache:CacheService) {
  }

  public get<T>(url:string,options?:{}):Observable<T>{
    let key = this.cache.makeKey(url,options);
    if (this.cache.productsCache && this.cache.getFromCash(key)){
      console.log('ЕСТЬ в кэш');
      console.log(this.cache.productsCache);
      return this.cache.getFromCash(key);
    } else {
      console.log('НЕТ в кэш');
      this.cache.addToCache(key,this.http.get<T>(url,options));
      return this.http.get<T>(url,options);
    }
  }

  public post(url:string,data:any){
    return this.http.post(url,data).toPromise()
  }

  public put(url:string,data:any){
    return this.http.put(url,data).toPromise()
  }

  public delete(url:string,data:any){
    return this.http.delete(url,data).toPromise()
  }
}
