import {createFeature, createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "../reducers";

export const selectProductsState = createFeatureSelector<State>('catalog');

export const selectProductsInfo = createSelector(selectProductsState,(state)=>state.productsInfo);

export const selectProducts = createSelector(selectProductsState,(state)=>state.productsInfo==null?null:state.productsInfo.items);

export const selectLoading = createSelector(selectProductsState,(state)=>state.loading);
