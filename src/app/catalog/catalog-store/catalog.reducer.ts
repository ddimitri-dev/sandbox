import {createReducer, on} from "@ngrx/store";
import {CatalogState, initialCatalogState} from "./catalog.store";
import {loadCatalogFailure, loadCatalogSuccess} from "./catalog.actions";

const catalogStateReducer = createReducer(
  initialCatalogState,
  on(loadCatalogSuccess, (state: CatalogState, action): CatalogState => ({
    productList: action.items
  })),
  on(loadCatalogFailure, (state: CatalogState, action): CatalogState => ({
    errorMessage:action.err,
    productList: []
  }))
);

export function reducer(state, action) {
  return catalogStateReducer(state, action);
}
