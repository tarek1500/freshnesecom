import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart/cart.service';
import { WishlistService } from '../../services/wishlist/wishlist.service';
import { ChatService } from '../../services/chat/chat.service';
import { Category } from '../../interfaces/category.interface';
import { Cart } from '../../interfaces/cart.interface';
import { Wishlist } from '../../interfaces/wishlist.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	@Input('show-icons') showIcons: boolean = true;
	rtl: boolean = false;
	subscriptions: Subscription[] = [];
	categories: Category[];
	cart!: Cart;
	isCartVisible: boolean = false;
	wishlist!: Wishlist;

	constructor(
		private translateService: TranslateService,
		private cartService: CartService,
		private wishlistService: WishlistService,
		private chatService: ChatService
	) {
		this.categories = [
			{
				id: 0,
				name: 'All categories',
				slug: '',
				subcategories: []
			},
			{
				id: 1,
				name: 'Category 1',
				slug: 'category-1',
				subcategories: []
			},
			{
				id: 2,
				name: 'Category 2',
				slug: 'category-2',
				subcategories: []
			},
			{
				id: 3,
				name: 'Category 3',
				slug: 'category-3',
				subcategories: []
			}
		];
	}

	ngOnInit(): void {
		let subscription = this.translateService.onLangChange.subscribe(event => {
			this.rtl = event.translations.direction === 'rtl';
		});
		this.subscriptions.push(subscription);

		subscription = this.cartService.cartSubject$.subscribe(cart => {
			this.cart = cart;
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

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		let basketElement = (event.target as Element).closest('.basket');
		let cartElement = (event.target as Element).closest('app-cart');

		if (!basketElement && !cartElement) {
			this.isCartVisible = false;
		}
	}

	openChatWindow(event: MouseEvent) {
		this.chatService.updateValue(true);
	}

	onCategorySearch(event: { search: string, category: Category }) { }

	onCartClosed() {
		this.isCartVisible = false;
	}
}
