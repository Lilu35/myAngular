import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";



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
    BageModule
  ]
})
export class CartModule { }
