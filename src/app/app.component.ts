import { Component } from '@angular/core';

import { CartService } from './services/cart.service';
import { Cart } from './interfaces/cart.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'freshnesecom';

	constructor(private cartService: CartService) {
		// Fetch cart from server
		let cart: Cart = {
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
					availablePacks: [
						{
							id: 1,
							stock: 10,
							pack: 'pcs'
						},
						{
							id: 2,
							stock: 20,
							pack: 'kgs'
						},
						{
							id: 3,
							stock: 1,
							pack: 'box'
						},
						{
							id: 4,
							stock: 2,
							pack: 'pack'
						}
					],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id:1,
						quantity: 1,
						pack: 'pcs'
					},
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
					availablePacks: [
						{
							id: 1,
							stock: 10,
							pack: 'pcs'
						},
						{
							id: 2,
							stock: 20,
							pack: 'kgs'
						},
						{
							id: 3,
							stock: 1,
							pack: 'box'
						},
						{
							id: 4,
							stock: 2,
							pack: 'pack'
						}
					],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 1,
						quantity: 1,
						pack: 'pcs'
					},
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
					availablePacks: [
						{
							id: 1,
							stock: 10,
							pack: 'pcs'
						},
						{
							id: 2,
							stock: 20,
							pack: 'kgs'
						},
						{
							id: 3,
							stock: 1,
							pack: 'box'
						},
						{
							id: 4,
							stock: 2,
							pack: 'pack'
						}
					],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 1,
						pack: 'pcs'
					},
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
					availablePacks: [
						{
							id: 1,
							stock: 10,
							pack: 'pcs'
						},
						{
							id: 2,
							stock: 20,
							pack: 'kgs'
						},
						{
							id: 3,
							stock: 1,
							pack: 'box'
						},
						{
							id: 4,
							stock: 2,
							pack: 'pack'
						}
					],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 1,
						quantity: 1,
						pack: 'pcs'
					},
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
