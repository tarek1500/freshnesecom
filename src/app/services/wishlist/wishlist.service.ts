import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Wishlist } from '../../interfaces/wishlist.interface';

@Injectable({
	providedIn: 'root'
})
export class WishlistService {
	private _wishlistSubject$: BehaviorSubject<Wishlist>;
	get wishlistSubject$(): Observable<Wishlist> { return this._wishlistSubject$.asObservable(); };

	private _wishlist!: Wishlist;
	get wishlist(): Wishlist { return this._wishlist };

	constructor() {
		let wishlist: Wishlist = {
			id: 0,
			products: []
		};

		this._wishlistSubject$ = new BehaviorSubject<Wishlist>(wishlist);
		this.updateValue(wishlist);
	}

	updateValue(wishlist: Wishlist) {
		this._wishlist = wishlist;
		this._wishlistSubject$.next(wishlist);
	}
}
