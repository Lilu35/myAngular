import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardComponent} from "../product-card/product-card.component";
import {CatalogComponent} from "./catalog.component";

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: ':id',
    component: ProductCardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }
