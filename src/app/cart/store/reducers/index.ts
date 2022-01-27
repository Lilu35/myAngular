
import {createReducer, on} from "@ngrx/store";
import {addProduct, clickToCart, deleteProduct} from "../actions/cart.actions";
import {ProductSB} from "../../../types/card";

export interface Cart {
  countInCart: number,
  cartIsOpen: boolean,
  productsInCart: Array<{qty:number,product:ProductSB}>,
  sumCart: number
}

export const initialCartState: Cart = {
  countInCart: 0,
  cartIsOpen: false,
  productsInCart: [],
  sumCart: 0
};

export const reducer = createReducer(
  initialCartState,
  on(addProduct,(state,{product})=>({
    ...state,
    countInCart: state.countInCart + 1,
    productsInCart: state.productsInCart.filter(x => x.product === product).length==0?
                    state.productsInCart.concat({qty: 1, product: product}):
                    state.productsInCart.map(function(item) { return item.product == product ?
                      {qty:item.qty+1,product:product}:
                      item; }),
    sumCart: state.sumCart + product.price
  })),
  on(deleteProduct,(state,{product})=>({
    ...state,
    // @ts-ignore
    sumCart: state.sumCart - product.price*(state.productsInCart.find((item)=>item.product == product).qty),
    // @ts-ignore
    countInCart: state.countInCart - state.productsInCart.find((item)=>item.product == product).qty,
    productsInCart:  state.productsInCart.filter(obj => obj.product !== product)
  })),
  on(clickToCart,(state)=>({
    ...state,
    cartIsOpen: !state.cartIsOpen
  }))
);
