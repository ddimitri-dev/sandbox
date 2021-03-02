import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {cartFeatureKey} from "./cart.selectors";
import {reducer} from "./cart.reducer";


@NgModule({
  imports: [
    StoreModule.forFeature(cartFeatureKey, reducer)
  ]
})
export class CartStoreModule {
}
