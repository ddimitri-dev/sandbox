import {createReducer, on} from "@ngrx/store";
import {CartState, initialCartState} from "./cart.store";
import {addToCart, removeFromCart} from "./cart.actions";
import {ProductItem} from "../../catalog/product-item";
// import {Action} from "rxjs/internal/scheduler/Action";


const cartStateReducer = createReducer(
  initialCartState,
  on(addToCart, (state: CartState, action): CartState => ({
    counter: state.counter + 1,
    productList:  [...state.productList, action.item] ,
    total: state.total + action.item.price
      // state.productList.concat(action.item)
  })), // Need to use ( to avoid object type cause the {} > ({})
  on(removeFromCart, (state: CartState, action): CartState => ({
    counter: state.counter - 1,
    productList: state.productList.filter( (product: ProductItem) => {
      return product !== action.item
    }), // state.productList.splice(state.productList.indexOf(action.item), 1)
    total: state.total - action.item.price
  }))
);

export function reducer(state, action) {
  return cartStateReducer(state, action);
}


