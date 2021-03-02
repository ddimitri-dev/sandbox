import {createAction, props} from "@ngrx/store";
import {ProductItem} from "../../catalog/product-item";

export const addToCart = createAction(
  "[COUNTER] Add to cart",
  props<{item: ProductItem}>()
);

export const removeFromCart = createAction(
  "[COUNTER] Remove from cart",
  props<{item: ProductItem}>()
);
