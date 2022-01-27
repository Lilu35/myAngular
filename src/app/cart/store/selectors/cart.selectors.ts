import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Cart} from "../reducers";

export const selectProductsInCartState = createFeatureSelector<Cart>('cart');

export const selectCountProductsInCart = createSelector(selectProductsInCartState,(state)=>state.countInCart);

export const selectProductsInCart = createSelector(selectProductsInCartState,(state)=>state.productsInCart);

export const selectCartIsOpen = createSelector(selectProductsInCartState,(state)=>state.cartIsOpen);

export const selectSumCart = createSelector(selectProductsInCartState,(state)=>state.sumCart);
