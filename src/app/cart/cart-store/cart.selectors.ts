import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartState} from "./cart.store";

export const cartFeatureKey = "cart";

let featureSelector = createFeatureSelector(cartFeatureKey);

export let selectorCartCounter = createSelector(featureSelector, (state: CartState) => {return state.productList.length});

export let selectorProductList = createSelector(featureSelector, (state: CartState) => {return state.productList});

export let selectorTotal =  createSelector(featureSelector, (state: CartState) => {return state.productList.reduce((total, item) => total + item.price, 0)});
