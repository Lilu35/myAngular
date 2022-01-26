import {createAction, props} from "@ngrx/store";
import {ProductInfo} from "../../../types/card";

export const loadSuccess = createAction(
  '[Catalog Api] Load Products Success',
  props<{productsInfo: ProductInfo}>()
);

export const loadFailure = createAction(
  '[Catalog Api] Load Products Failure',
  props<{error: any}>()
);
