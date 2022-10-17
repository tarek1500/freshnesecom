import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Order } from '../../../../interfaces/order.interface';

@Component({
	selector: 'app-show',
	templateUrl: './show-order.component.html',
	styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit, OnDestroy {
	routeSubscription!: Subscription;
	order!: Order;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.routeSubscription = this.route.params.subscribe(params => {
			let id = params['order'];

			// Fetch order from server
			this.order = {
				id: id,
				number: 'ABC-01',
				user: {
					id: 1,
					name: 'User',
					email: '',
					phone: '',
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
					address: '1234 Freshnesecom St',
					city: 'San Francisco, CA',
					country: 'USA',
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				},
				total: 51.8,
				date: new Date('2020-6-22')
			};
		});
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}
}
