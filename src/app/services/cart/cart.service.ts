import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart } from '../../interfaces/cart.interface';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private _cartSubject$: BehaviorSubject<Cart>;
	get cartSubject$(): BehaviorSubject<Cart> { return this._cartSubject$; };

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
	}
}
