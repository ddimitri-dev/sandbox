import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectorProductList, selectorTotal} from "../cart-store/cart.selectors";
import {removeFromCart} from "../cart-store/cart.actions";
import {ProductItem} from "../../catalog/product-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  public productList$ = this.store.select(selectorProductList);
  public total$ = this.store.select(selectorTotal);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  removeItem(item: ProductItem) {
    this.store.dispatch(removeFromCart({item}))
  }
}
