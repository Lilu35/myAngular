import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {ProductCardModule} from "../product-card/product-card.module";
import {CartModule} from "../cart/cart.module";
import {ToggleModule} from "../toggle/toggle.module";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CatalogSharedModule} from "./catalog-shared.module";
import {ProductCardNewModule} from "../product-card-new/product-card-new.module";
import {ButtonModule} from "../button/button.module";
import {ProductInfoModule} from "../product-info/product-info.module";
import {FavoritesModule} from "../favorites/favorites.module";
import {StoreModule} from "@ngrx/store";
import * as fromState from './store/reducers'
import {ProductsEffects} from "./store/effects";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule,
    CartModule,
    ToggleModule,
    CatalogRoutingModule,
    CatalogSharedModule,
    ButtonModule,
    ProductCardNewModule,
    ProductInfoModule,
    FavoritesModule,
    StoreModule.forFeature('catalog',fromState.reducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
