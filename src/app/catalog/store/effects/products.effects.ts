import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CatalogApiActions, CatalogPageActions} from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {Product, ProductInfo} from "../../../types/card";
import {of} from "rxjs";
import {ProductsService} from "../../../services/products.service";

@Injectable()
export class ProductsEffects{
  loadProducts$ = createEffect(()=>this.actions$
    .pipe(ofType(CatalogPageActions.enter),
      switchMap((_)=>this.productService.getProducts$(this.productService.queryParams)
        .pipe(map((productsInfo: ProductInfo)=>CatalogApiActions.loadSuccess({productsInfo})),
          catchError((error)=>of(CatalogApiActions.loadFailure({error})))))));

  constructor(private actions$: Actions, private productService: ProductsService){}
}

