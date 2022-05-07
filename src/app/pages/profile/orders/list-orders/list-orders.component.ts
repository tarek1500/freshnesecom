import { Component, OnInit } from '@angular/core';

import { Order } from '../../../../interfaces/order.interface';

@Component({
	selector: 'app-list-orders',
	templateUrl: './list-orders.component.html',
	styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
	orders!: Order[];

	constructor() { }

	ngOnInit(): void {
		this.orders = [
			{
				id: 1,
				number: 'ABC-01',
				user: {
					id: 1,
					name: 'User',
					role: '',
					image: ''
				},
				items: [
					{
						id: 1,
						product: {
							id: 1,
							name: 'Product Title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 15.95,
							oldPrice: 20,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Tarm Fields',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'pcs'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'Europe',
							selectedQuantity: {
								id:0,
								quantity: 0,
								pack: ''
							},
							shipping: 'Free Shipping',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 2,
						price: 15.95
					},
					{
						id: 2,
						product: {
							id: 2,
							name: 'Product Title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 9.95,
							oldPrice: 11,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Tarm Fields',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'pcs'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'Europe',
							selectedQuantity: {
								id:0,
								quantity: 0,
								pack: ''
							},
							shipping: 'Free Shipping',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 2,
						price: 9.95
					}
				],
				address: {
					id: 1,
					title: 'Main address',
					address: '1234 Freshnesecom St, San Francisco, CA',
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				},
				total: 51.8,
				date: new Date('2020-6-22')
			},
			{
				id: 2,
				number: 'ABC-02',
				user: {
					id: 1,
					name: 'User',
					role: '',
					image: ''
				},
				items: [
					{
						id: 3,
						product: {
							id: 3,
							name: 'Product Title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 20,
							oldPrice: 25,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Tarm Fields',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'pcs'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'Europe',
							selectedQuantity: {
								id:0,
								quantity: 0,
								pack: ''
							},
							shipping: 'Free Shipping',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 3,
						price: 20
					},
					{
						id: 4,
						product: {
							id: 4,
							name: 'Product Title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 11,
							oldPrice: 13.95,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Tarm Fields',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'pcs'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'Europe',
							selectedQuantity: {
								id:0,
								quantity: 0,
								pack: ''
							},
							shipping: 'Free Shipping',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 3,
						price: 11
					}
				],
				address: {
					id: 1,
					title: 'Main address',
					address: '1234 Freshnesecom St, San Francisco, CA',
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				},
				total: 93,
				date: new Date('2020-6-15')
			}
		];
	}

}
