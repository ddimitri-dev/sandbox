import {CatalogComponent} from './catalog/catalog.component';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CatalogService} from './service/catalog.service';
import {CatalogStoreModule} from "./catalog-store/catalog-store.module";

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CatalogStoreModule
  ],
  exports: [
    CatalogComponent,
  ],
  providers: [
    CatalogService,
  ],
})
export class CatalogModule {
}
