import { Component } from '@angular/core';

import { CartService } from './services/cart.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'freshnesecom';

	constructor(private cartService: CartService) {
		// Fetch cart from server
		let cart = {
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
			tax: 16.53,
			shipping: 0,
			currency: 'USD'
		};
		this.cartService.cartSubject$.next(cart);
	}
}
