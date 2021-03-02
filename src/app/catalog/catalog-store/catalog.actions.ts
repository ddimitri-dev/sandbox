import {createAction, props} from "@ngrx/store";
import {ProductItem} from "../../catalog/product-item";

export const loadCatalog = createAction(
  "[CATALOG] Load catalog"
);

export const loadCatalogSuccess = createAction(
  "[CATALOG] Load catalog success",
  props<{items: ProductItem[]}>()
);

export const loadCatalogFailure = createAction(
  "[CATALOG] Load catalog failure",
  props<{err: string}>()
);
