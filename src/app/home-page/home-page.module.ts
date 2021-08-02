import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "../button/button.module";
import {ProductsService} from "../services/products.service";
import {ButtonSortModule} from "../button-sort/button-sort.module";
import {DropDownMenuModule} from "../drop-down-menu/drop-down-menu.module";
import {DropDownListModule} from "../drop-down-list/drop-down-list.module";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ButtonSortModule,
    DropDownMenuModule,
    DropDownListModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [ProductsService]
})
export class HomePageModule { }
