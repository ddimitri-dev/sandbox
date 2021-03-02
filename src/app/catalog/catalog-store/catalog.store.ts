import {ProductItem} from "../product-item";

export interface CatalogState {
  productList: ProductItem[];
  errorMessage:string;
  page: number;
}

export const initialCatalogState: CatalogState = {
  productList : [],
  errorMessage : '',
  page: 0
};
