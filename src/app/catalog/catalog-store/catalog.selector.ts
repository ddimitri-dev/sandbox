import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CatalogState} from "./catalog.store";

export const catalogFeatureKey = "catalog";

let featureSelector = createFeatureSelector(catalogFeatureKey);

export let selectorProductList = createSelector(featureSelector, (state: CatalogState) => {return state.productList});

