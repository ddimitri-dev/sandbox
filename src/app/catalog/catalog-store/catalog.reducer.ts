import {createReducer, on} from "@ngrx/store";
import {CatalogState, initialCatalogState} from "./catalog.store";
import {loadCatalogFailure, loadCatalogSuccess, nextCatalogPage} from "./catalog.actions";

const catalogStateReducer = createReducer(
  initialCatalogState,
  on(loadCatalogSuccess, (state: CatalogState, action): CatalogState => ({
    ...state,
    productList: action.items
  })),
  on(loadCatalogFailure, (state: CatalogState, action): CatalogState => ({
    ...state,
    errorMessage:action.err,
  })),
  on(nextCatalogPage, (state: CatalogState, action): CatalogState => ({
    ...state,
    page: state.page + 1,
  }))
);

export function reducer(state, action) {
  return catalogStateReducer(state, action);
}
