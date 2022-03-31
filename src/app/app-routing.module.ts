import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {Hw9Component} from "./hw9/hw9.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule)
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
  },
  {
    path: 'tabs',
    component: Hw9Component
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module')
      .then((m)=>m.AuthModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

