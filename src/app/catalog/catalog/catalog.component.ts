import {Component, OnInit} from '@angular/core';
import {ProductItem} from '../product-item';
import {CatalogService} from '../service/catalog.service';
import {CartState} from "../../cart/cart-store/cart.store";
import {Store} from "@ngrx/store";
import {addToCart} from "../../cart/cart-store/cart.actions";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  catalog: ProductItem[] = [];

  constructor(private catalogService: CatalogService, private store: Store<CartState>) {
  }

  ngOnInit(): void {
    this.catalogService.loadArticles(0)
      .subscribe((value) => {
        this.catalog = value;
      })
  }

  nextPage() {
  }

  addToCart(item: ProductItem) {
    this.store.dispatch(addToCart({item}));
  }
}
