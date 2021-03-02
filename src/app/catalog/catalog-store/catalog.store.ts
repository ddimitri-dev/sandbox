import {ProductItem} from "../product-item";

export interface CatalogState {
  productList: ProductItem[];
  errorMessage?:string;

}

export const initialCatalogState: CatalogState = {
  productList : [],
  errorMessage : ''
}
