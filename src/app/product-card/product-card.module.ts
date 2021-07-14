import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";
import {RatingModule} from "../rating/rating.module";
import {ProductCardComponent} from "./product-card.component";



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RatingModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
