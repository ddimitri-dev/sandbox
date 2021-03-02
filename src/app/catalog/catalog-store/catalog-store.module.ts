import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {catalogFeatureKey} from "./catalog.selector";
import {reducer} from "./catalog.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CatalogEffect} from "./catalog.effect";

@NgModule({
  imports: [
    StoreModule.forFeature(catalogFeatureKey, reducer),
    EffectsModule.forFeature([CatalogEffect])
  ]
})
export class CatalogStoreModule {
}
