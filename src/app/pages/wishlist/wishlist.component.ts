import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
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
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.wishlist', text: 'Wishlist', link: '' }
	];
	wishlist!: Wishlist;
	isGridView: boolean = true;

	constructor(
		private languageService: LanguageService,
		private wishlistService: WishlistService
	) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);

		subscription = this.wishlistService.wishlistSubject$.subscribe(wishlist => {
			this.wishlist = wishlist;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
