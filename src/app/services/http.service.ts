import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CacheService} from "./cache.service";
import {ProductSB} from "../types/card";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
  }

  public get<T>(url:string,options?:{}):Observable<T>{
    return this.http.get<T>(url,options);
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
