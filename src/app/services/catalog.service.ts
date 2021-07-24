import { Injectable } from '@angular/core';
import {CatalogModule} from "../catalog/catalog.module";
import {Product, Toggle} from "../types/card";
import {DataService} from "./data.service";
import {CatalogSharedModule} from "../catalog/catalog-shared.module";

@Injectable({
  providedIn: CatalogSharedModule
})
export class CatalogService {

  constructor(private dataService: DataService) { }

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
    return this.dataService.getData().filter(x => x.id === id);
  }

}
