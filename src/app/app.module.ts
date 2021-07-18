import {LOCALE_ID, NgModule} from '@angular/core';
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
import { MenuComponent } from './menu/menu.component';
import {MenuModule} from "./menu/menu.module";
import {DropDownMenuModule} from "./drop-down-menu/drop-down-menu.module";
import {CatalogModule} from "./catalog/catalog.module";
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';

registerLocaleData(localeRU);

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
    MenuModule,
    DropDownMenuModule,
    CatalogModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
