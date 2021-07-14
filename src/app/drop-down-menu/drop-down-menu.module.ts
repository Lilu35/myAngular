import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownMenuComponent } from './drop-down-menu.component';
import {ButtonModule} from "../button/button.module";
import {MenuModule} from "../menu/menu.module";



@NgModule({
  declarations: [
    DropDownMenuComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule
  ],
  exports: [
    DropDownMenuComponent
  ]
})
export class DropDownMenuModule { }
