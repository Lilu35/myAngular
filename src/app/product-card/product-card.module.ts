import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";
import {RatingModule} from "../rating/rating.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RatingModule
  ]
})
export class ProductCardModule { }
