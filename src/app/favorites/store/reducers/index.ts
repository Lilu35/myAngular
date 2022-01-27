import {ProductSB} from "../../../types/card";
import {createReducer, on} from "@ngrx/store";
import {addProduct, clearFavorite, clickToFavorite, deleteProduct} from "../actions/favorite.actions";

export interface Favorite {
  countInFavorite: number,
  favoriteIsOpen: boolean,
  productsInFavorite: Array<ProductSB>
}

export const initialFavoriteState: Favorite = {
  countInFavorite: 0,
  favoriteIsOpen: false,
  productsInFavorite: []
};

export const reducer = createReducer(
  initialFavoriteState,
  on(addProduct,(state,{product})=>({
    ...state,
    countInFavorite: state.productsInFavorite.filter(x => x === product).length==0?
                  state.countInFavorite + 1:state.countInFavorite,
    productsInFavorite: state.productsInFavorite.filter(x => x === product).length==0?
                  state.productsInFavorite.concat(product):state.productsInFavorite
  })),
  on(deleteProduct,(state,{product})=>({
    ...state,
    // @ts-ignore
    countInFavorite: state.countInFavorite - 1,
    productsInFavorite:  state.productsInFavorite.filter(obj => obj !== product)
  })),
  on(clickToFavorite,(state)=>({
    ...state,
    favoriteIsOpen: !state.favoriteIsOpen
  })),
  on(clearFavorite,(state)=>({
    ...state,
    productsInFavorite: [],
    countInFavorite: 0
  }))
);
