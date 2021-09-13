import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BageModule} from "./bage/bage.module";
import {ButtonModule} from "./button/button.module";
import {IconModule} from "./icon/icon.module";
import {RatingModule} from "./rating/rating.module";
import {TooltipModule} from "./tooltip/tooltip.module";
import {ProductCardModule} from "./product-card/product-card.module";
import {DropDownListModule} from "./drop-down-list/drop-down-list.module";
import {IconTooltipModule} from "./icon-tooltip/icon-tooltip.module";
import {FormsModule} from "@angular/forms";
import {MenuModule} from "./menu/menu.module";
import {DropDownMenuModule} from "./drop-down-menu/drop-down-menu.module";
import {CommonModule, registerLocaleData} from '@angular/common';
import localeRU from '@angular/common/locales/ru';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HomePageModule} from "./home-page/home-page.module";
import {CartModule} from "./cart/cart.module";
import {ToggleModule} from "./toggle/toggle.module";
import {NotFoundModule} from "./not-found/not-found.module";
import {FavoritesModule} from "./favorites/favorites.module";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {TopBarModule} from "./top-bar/top-bar.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RegistrationPageModule} from "./registration-page/registration-page.module";
import { PasswordMatchDirective } from './checkout/directives/password-match.directive';
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

registerLocaleData(localeRU);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BageModule,
    ButtonModule,
    CartModule,
    DropDownListModule,
    DropDownMenuModule,
    FavoritesModule,
    HomePageModule,
    IconModule,
    IconTooltipModule,
    MenuModule,
    NotFoundModule,
    RegistrationPageModule,
    ProductCardModule,
    RatingModule,
    ToggleModule,
    TooltipModule,
    TopBarModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
