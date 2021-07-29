import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {environment} from "../../environments/environment";
import {Product} from "../types/card";
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>{{title}}</h1></div>
      <pre>{{products$|async|json}}</pre>
  `,
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  title = 'MY SHOP';
  // products: Array<Product> = [];
  public products$: Observable<Array<Product>> = this.productsService.getProducts$();

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

}
