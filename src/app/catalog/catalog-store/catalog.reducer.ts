import {createReducer, on} from "@ngrx/store";
import {initialCatalogState} from "./catalog.store";

const catalogStateReducer = createReducer(
  initialCatalogState,
);

export function reducer(state, action) {
  return catalogStateReducer(state, action);
}
