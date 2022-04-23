import { Component, OnDestroy, OnInit } from '@angular/core';
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
	selectedCategory: Category;
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
		this.selectedCategory = this.categories[0];
	}

	ngOnInit(): void {
		this.cartSubscription = this.cartService.cartSubject$.subscribe(cart => {
			this.cart = cart;
		});
	}

	ngOnDestroy(): void {
		this.cartSubscription.unsubscribe();
	}

	onCategorySelected(category: Category) {
		this.selectedCategory = category;
	}

	onCartClosed() {
		this.isCartVisible = false;
	}
}
