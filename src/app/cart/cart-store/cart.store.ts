import {ProductItem} from "../../catalog/product-item";

export interface CartState {
  counter: number;
  productList: ProductItem[];
  total: number

}

export const initialCartState: CartState = {
  counter : 0,
  productList : [],
  total: 0
}
