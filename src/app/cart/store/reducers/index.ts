
import {createReducer, on} from "@ngrx/store";
import {addProduct, clickToCart, deleteProduct} from "../actions/cart.actions";
import {ProductSB} from "../../../types/card";

export interface Cart {
  countInCart: number,
  countItemsInCart: number,
  cartIsOpen: boolean,
  productsInCart: Array<ProductSB>
}

export const initialCartState: Cart = {
  countInCart: 0,
  countItemsInCart: 0,
  cartIsOpen: false,
  productsInCart: []
};

export const reducer = createReducer(
  initialCartState,
  on(addProduct,(state,{product})=>({
    ...state,
    countInCart: state.countInCart++,
    countItemsInCart: state.productsInCart.push(product),
    productsInCart: state.productsInCart
  })),
  on(deleteProduct,(state,{product})=>({
    ...state,
    countInCart: state.countInCart--,
    productsInCart:  state.productsInCart.filter(obj => obj !== product),
    countItemsInCart: state.productsInCart.length
  })),
  on(clickToCart,(state)=>({
    ...state,
    cartIsOpen: !state.cartIsOpen
  }))
);
