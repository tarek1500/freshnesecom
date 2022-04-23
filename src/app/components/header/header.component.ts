import { Component, OnInit } from '@angular/core';

import { Category } from '../../interfaces/category.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	categories: Category[];
	selectedCategory: Category;
	cart: Cart;
	isCartVisible: boolean = false;

	constructor() {
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
		this.cart = {
			id: 1,
			products: [
				{
					id: 1,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					buyBy: '',
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/200/100']
				},
				{
					id: 2,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					buyBy: '',
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/200/100']
				},
				{
					id: 3,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					buyBy: '',
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/300/100']
				},
				{
					id: 4,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					buyBy: '',
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/107/200/100']
				}
			],
			subtotal: 147.96,
			tax: 0,
			shipping: 0,
			currency: 'USD'
		};
	}

	ngOnInit(): void {
	}

	onCategorySelected(category: Category) {
		this.selectedCategory = category;
	}

	onCartClosed() {
		this.isCartVisible = false;
	}
}
