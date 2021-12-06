import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "../button/button.module";
import {SelectComponent} from "./select.component";



@NgModule({
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SelectModule { }
