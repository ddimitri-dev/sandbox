import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {CartComponent} from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {CartStoreModule} from "./cart-store/cart-store.module";

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatListModule,
    CartStoreModule
  ],
  exports: [
    CartComponent,
  ],
})
export class CartModule {
}
