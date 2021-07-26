import { Injectable } from '@angular/core';
import {CatalogModule} from "../catalog/catalog.module";
import {Product, Toggle} from "../types/card";
import {DataService} from "./data.service";
import {CatalogSharedModule} from "../catalog/catalog-shared.module";
import {products} from "../data/product.data";

@Injectable({
  providedIn: CatalogSharedModule
})
export class CatalogService {

  constructor(private dataService: DataService) {
    this.dataService.setData(products);
  }

  getProducts(filterBy: Toggle): Array<Product>{
      if (!filterBy) return this.dataService.getData();
      if (filterBy.value === 'none') {
        return this.dataService.getData();
      }
      if (filterBy.value === 'available') {
        return this.dataService.getData().filter(x => x.available);
      }
      if (filterBy.value === 'actionPrice') {
        return  this.dataService.getData().filter(x => x.discount);
      }
      return this.dataService.getData();
  }

  getProduct(id:number){
    console.log(this.dataService.getData());
    console.log(this.dataService.getData().filter(p => p.id === id));
    return this.dataService.getData().filter(p => p.id === id);
  }

}
