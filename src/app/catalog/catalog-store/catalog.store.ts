import {ProductItem} from "../product-item";

export interface CatalogState {
  productList: ProductItem[];

}

export const initialCatalogState: CatalogState = {
  productList : [],
}
