import { ProductInfo} from "../../../types/card";
import {createReducer, on} from "@ngrx/store";
import {CatalogApiActions, CatalogPageActions} from "../actions";

export interface State {
  productsInfo: ProductInfo|null,
  loading: boolean
}

export const initialState: State = {
  productsInfo: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(CatalogPageActions.enter,(state)=>({
    ...state,
    loading: true
  })),
  on(CatalogApiActions.loadSuccess,(state,{productsInfo})=>({
    ...state,
    productsInfo,
    loading: false
  })),
  on(CatalogApiActions.loadFailure,(state)=>({
    ...state,
    loading: false
  }))
);

