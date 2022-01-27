
import {createReducer, on} from "@ngrx/store";
import {addProduct, clickToCart, deleteProduct} from "../actions/cart.actions";
import {ProductSB} from "../../../types/card";

export interface Cart {
  countInCart: number,
  cartIsOpen: boolean,
  productsInCart: Array<ProductSB>
}

export const initialCartState: Cart = {
  countInCart: 0,
  cartIsOpen: false,
  productsInCart: []
};

export const reducer = createReducer(
  initialCartState,
  on(addProduct,(state,{product})=>({
    ...state,
    countInCart: state.countInCart + 1,
    productsInCart: state.productsInCart.concat(product)
  })),
  on(deleteProduct,(state,{product})=>({
    ...state,
    countInCart: state.countInCart - 1,
    productsInCart:  state.productsInCart.filter(obj => obj !== product)
  })),
  on(clickToCart,(state)=>({
    ...state,
    cartIsOpen: !state.cartIsOpen
  }))
);
