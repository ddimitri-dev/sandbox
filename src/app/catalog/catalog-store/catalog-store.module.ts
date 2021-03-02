import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {catalogFeatureKey} from "./catalog.selector";
import {reducer} from "./catalog.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(catalogFeatureKey, reducer)
  ]
})
export class CatalogStoreModule {
}
