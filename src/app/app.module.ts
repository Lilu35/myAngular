import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BageComponent} from "./bage/bage.component";
import {BageModule} from "./bage/bage.module";
import {ButtonModule} from "./button/button.module";
import {IconModule} from "./icon/icon.module";
import {RatingModule} from "./rating/rating.module";
import {TooltipModule} from "./tooltip/tooltip.module";
import {ProductCardModule} from "./product-card/product-card.module";
import {DropDownListModule} from "./drop-down-list/drop-down-list.module";
import {IconTooltipModule} from "./icon-tooltip/icon-tooltip.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BageModule,
    ButtonModule,
    IconModule,
    RatingModule,
    TooltipModule,
    ProductCardModule,
    DropDownListModule,
    IconTooltipModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
