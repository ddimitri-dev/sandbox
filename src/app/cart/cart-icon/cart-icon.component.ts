import {Component, OnInit} from '@angular/core';
import {CartState} from "../cart-store/cart.store";
import {Store} from "@ngrx/store";
import {selectorCartCounter} from "../cart-store/cart.selectors";

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent implements OnInit {

  public  counter$ = this.store.select(selectorCartCounter);

  constructor(private store: Store<CartState>) {
  }

  ngOnInit(): void {
  }

}
