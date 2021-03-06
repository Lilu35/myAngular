import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import {ButtonModule} from "../button/button.module";



@NgModule({
  declarations: [
    ToggleComponent
  ],
  exports: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ToggleModule { }
