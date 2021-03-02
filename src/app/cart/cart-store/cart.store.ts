import {ProductItem} from "../../catalog/product-item";

export interface CartState {
  productList: ProductItem[];
 // total: number

}

export const initialCartState: CartState = {
  productList : [],
 // total: 0
}
