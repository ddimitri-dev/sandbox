import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CatalogModule} from './catalog/catalog.module';
import {CartIconModule} from './cart/cart-icon/cart-icon.module';
import {CartModule} from './cart/cart.module';
import {CountryModule} from './country/country.module';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CatalogModule,
    CartIconModule,
    CartModule,
    CountryModule,
    StoreModule.forRoot({}), // Will combine all features
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
