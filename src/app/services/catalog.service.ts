import { Injectable } from '@angular/core';
import {CatalogModule} from "../catalog/catalog.module";
import {Product} from "../types/card";

@Injectable({
  providedIn: CatalogModule
})
export class CatalogService {

  constructor() { }

  // getProducts(filterBy?: 'actionPrice' | 'available' | 'none'): Array<Product>{
  //
  // }

  // getProduct(id:number): Product{
  //
  // }

}
