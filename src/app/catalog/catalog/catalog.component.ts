import {Component, OnInit} from '@angular/core';
import {ProductItem} from '../product-item';
import {CatalogService} from '../service/catalog.service';
import {CartState} from "../../cart/cart-store/cart.store";
import {Store} from "@ngrx/store";
import {addToCart} from "../../cart/cart-store/cart.actions";
import {loadCatalog, loadCatalogFailure, loadCatalogSuccess} from "../catalog-store/catalog.actions";
import {selectorProductList} from "../catalog-store/catalog.selector";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  public catalog$ = this.store.select(selectorProductList);

  constructor(
    private catalogService: CatalogService, private store: Store<CartState>) {
  }

  ngOnInit(): void {
   this.reloadArticles()
  }

  nextPage() {
  }

  addToCart(item: ProductItem) {
    this.store.dispatch(addToCart({item}));
  }

  reloadArticles() {
   /*this.catalogService.loadArticles(0)
      .subscribe((value) => {
       // this.catalog = value;
        this.store.dispatch(loadCatalogSuccess({items: value}))
      }, err => {
        this.store.dispatch(loadCatalogFailure({err}))
      })*/
    //  debugger
   this.store.dispatch(loadCatalog());
  }
}
