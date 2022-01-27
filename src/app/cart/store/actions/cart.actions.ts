import {createAction, props} from "@ngrx/store";
import {ProductSB} from "../../../types/card";

export const addProduct = createAction(
  '[Cart] AddProduct',
  props<{product: ProductSB}>()
);

export const deleteProduct = createAction(
  '[Cart] DeleteProduct',
  props<{product: ProductSB}>()
);

export const clickToCart = createAction(
  '[Cart] ClickToCart'
);

