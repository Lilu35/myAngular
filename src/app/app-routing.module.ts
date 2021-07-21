import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FavoritesComponent} from "./favorites/favorites.component";

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

