import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";
import {StoreModule} from "@ngrx/store";
import * as fromState from "../catalog/store/reducers";



@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
  ]
})
export class CartModule { }
