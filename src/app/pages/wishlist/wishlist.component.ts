import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WishlistService } from '../../services/wishlist/wishlist.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Wishlist } from '../../interfaces/wishlist.interface';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.component.html',
	styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Wishlist', link: '' }
	];
	wishlist!: Wishlist;
	isGridView: boolean = true;

	constructor(private wishlistService: WishlistService) { }

	ngOnInit(): void {
		let subscription = this.wishlistService.wishlistSubject$.subscribe(wishlist => {
			this.wishlist = wishlist;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
