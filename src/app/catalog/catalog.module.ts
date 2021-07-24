import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {ProductCardModule} from "../product-card/product-card.module";
import {CartModule} from "../cart/cart.module";
import {ToggleModule} from "../toggle/toggle.module";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CatalogSharedModule} from "./catalog-shared.module";



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule,
    CartModule,
    ToggleModule,
    CatalogRoutingModule,
    CatalogSharedModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
