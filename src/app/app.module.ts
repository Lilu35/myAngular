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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {OrderPageComponent} from "./order-page/order-page.component";
import {OrderPageModule} from "./order-page/order-page.module";
import {ProductCardNewModule} from "./product-card-new/product-card-new.module";
import {ProductInfoModule} from "./product-info/product-info.module";
import { NgForOfDirective } from './directives/ng-for-of.directive';
import { ClickpastDirective } from './directives/clickpast.directive';
import {SelectModule} from "./select/select.module";
import { MenuDirective } from './directives/menu.directive';
import { ArrayFilterPipe } from './tests/pipes/array-filter.pipe';
import {MultiplierModule} from "./tests/components/multiplier/multiplier.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import * as fromUser from './store/reducers/user.reducers';
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import { TabsComponent } from './tabs/tabs.component';
import {TabsModule} from "./tabs/tabs.module";
import {Hw9Module} from "./hw9/hw9.module";
import {TabsBodyModule} from "./tabs-body/tabs-body.module";
import {TabsHeaderModule} from "./tabs-header/tabs-header.module";

registerLocaleData(localeRU);

@NgModule({
  declarations: [
    AppComponent,
    NgForOfDirective,
    ClickpastDirective,
    MenuDirective,
    ArrayFilterPipe
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
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    OrderPageModule,
    ProductCardNewModule,
    ProductInfoModule,
    SelectModule,
    MultiplierModule,
    TabsModule,
    Hw9Module,
    TabsBodyModule,
    TabsHeaderModule,
    StoreModule.forRoot({user: fromUser.reducer}),
    StoreDevtoolsModule.instrument({
      name:'NgRx Store',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
