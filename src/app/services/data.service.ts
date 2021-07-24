import { Injectable } from '@angular/core';
import {Product} from "../types/card";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Array<Product> = [];

  constructor() { }

  setData(data: Array<Product>){
    this.data = data;
  }

  getData(){
    return this.data;
  }
}
