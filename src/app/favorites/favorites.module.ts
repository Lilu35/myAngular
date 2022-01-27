import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import {ButtonModule} from "../button/button.module";
import {BageModule} from "../bage/bage.module";
import {StoreModule} from "@ngrx/store";
import * as fromState from "./store/reducers";



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    StoreModule.forFeature('favorite',fromState.reducer)
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
