import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {ButtonSortModule} from "../button-sort/button-sort.module";



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    ButtonSortModule
  ]
})
export class PagesModule { }
