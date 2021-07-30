import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductInfo} from "../types/card";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ProductsService {
  url =`${environment.api}/products`;

  constructor(private http:HttpService) { }

  getProducts$(queryParams: {[key: string]:string}):Observable<ProductInfo>{
    const params = new HttpParams({fromObject:queryParams});
    return this.http.get<ProductInfo>(this.url,{params});
  }
}
