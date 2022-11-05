import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { CartService } from '../../services/cart/cart.service';
import { WishlistService } from '../../services/wishlist/wishlist.service';
import { ChatService } from '../../services/chat/chat.service';
import { Language } from '../../interfaces/language.interface';
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
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	languages: Language[] = [
		{
			code: 'en',
			name: 'English'
		},
		{
			code: 'ar',
			name: 'العربية'
		}
	]
	selectedLanguage: Language = {
		code: '',
		name: ''
	};
	categories!: Category[];
	cart!: Cart;
	isCartVisible: boolean = false;
	wishlist!: Wishlist;

	constructor(
		private languageService: LanguageService,
		private translateService: TranslateService,
		private cartService: CartService,
		private wishlistService: WishlistService,
		private chatService: ChatService
	) { }

	ngOnInit(): void {
		if (this.languages.length > 0) {
			this.selectedLanguage = this.languages[0];
		}

		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadCategories();
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

	loadCategories() {
		if (this.rtl) {
			this.categories = [
				{
					id: 0,
					name: 'كل التصنيفات',
					slug: '',
					subcategories: []
				},
				{
					id: 1,
					name: 'تصنيف 1',
					slug: 'category-1',
					subcategories: []
				},
				{
					id: 2,
					name: 'تصنيف 2',
					slug: 'category-2',
					subcategories: []
				},
				{
					id: 3,
					name: 'تصنيف 3',
					slug: 'category-3',
					subcategories: []
				}
			];
		}
		else {
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

	onLanguageSelected(language: Language) {
		this.selectedLanguage = language;
		this.translateService.use(this.selectedLanguage.code);
	}

	onCategorySearch(event: { search: string, category: Category }) { }

	onCartClosed() {
		this.isCartVisible = false;
	}
}
