import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../types/card";

@Injectable()
export class ProductsService {

  constructor(private http:HttpService) { }

  getProducts$():Observable<Array<Product>>{
    const url =`${environment.api}/products`;
    return this.http.get<Array<Product>>(url);
  }
}
