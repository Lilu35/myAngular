import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
