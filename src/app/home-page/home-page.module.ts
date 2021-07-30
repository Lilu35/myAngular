import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "../button/button.module";
import {ProductsService} from "../services/products.service";
import {ButtonSortModule} from "../button-sort/button-sort.module";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ButtonSortModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [ProductsService]
})
export class HomePageModule { }
