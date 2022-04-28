import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { Category } from '../../interfaces/category.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	cartSubscription!: Subscription;
	categories: Category[];
	cart!: Cart;
	isCartVisible: boolean = false;

	constructor(private cartService: CartService) {
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
				slug: 'category-4',
				subcategories: []
			}
		];
	}

	ngOnInit(): void {
		this.cartSubscription = this.cartService.cartSubject$.subscribe(cart => {
			this.cart = cart;
		});
	}

	ngOnDestroy(): void {
		this.cartSubscription.unsubscribe();
	}

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		let basketElement = (event.target as Element).closest('.basket');
		let cartElement = (event.target as Element).closest('app-cart');

		if (!basketElement && !cartElement) {
			this.isCartVisible = false;
		}
	}

	onCategorySearch(event: { search: string, category: Category }) { }

	onCartClosed() {
		this.isCartVisible = false;
	}
}
