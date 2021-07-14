import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list.component';
import {ButtonModule} from "../button/button.module";



@NgModule({
  declarations: [DropDownListComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [DropDownListComponent]
})
export class DropDownListModule { }
