import {createAction, props} from "@ngrx/store";
import {ProductSB} from "../../../types/card";

export const addProduct = createAction(
  '[Favorite] AddProduct',
  props<{product: ProductSB}>()
);

export const deleteProduct = createAction(
  '[Favorite] DeleteProduct',
  props<{product: ProductSB}>()
);

export const clickToFavorite = createAction(
  '[Favorite] ClickToFavorite'
);

export const clearFavorite = createAction(
  '[Favorite] ClearFavorite'
);
