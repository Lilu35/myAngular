import {Favorite} from "../reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectProductsInFavoriteState = createFeatureSelector<Favorite>('favorite');

export const selectCountProductsInFavorite = createSelector(selectProductsInFavoriteState,(state)=>state.countInFavorite);

export const selectProductsInFavorite = createSelector(selectProductsInFavoriteState,(state)=>state.productsInFavorite);

export const selectFavoriteIsOpen = createSelector(selectProductsInFavoriteState,(state)=>state.favoriteIsOpen);
