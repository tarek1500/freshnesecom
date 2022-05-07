import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Cart } from '../../interfaces/cart.interface';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private _cartSubject$: BehaviorSubject<Cart>;
	get cartSubject$(): Observable<Cart> { return this._cartSubject$.asObservable(); };

	private _cart!: Cart;
	get cart(): Cart { return this._cart };

	constructor() {
		let cart = {
			id: 0,
			products: [],
			subtotal: 0,
			tax: 0,
			shipping: 0,
			currency: ''
		};

		this._cartSubject$ = new BehaviorSubject<Cart>(cart);
		this.updateValue(cart);
	}

	updateValue(cart: Cart) {
		this._cart = cart;
		this._cartSubject$.next(cart);
	}
}
