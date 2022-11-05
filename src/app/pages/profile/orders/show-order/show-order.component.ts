import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language/language.service';

import { Order } from '../../../../interfaces/order.interface';

@Component({
	selector: 'app-show',
	templateUrl: './show-order.component.html',
	styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	language: string = 'en';
	rtl: boolean = false;
	order: Order = {
		id: 0,
		number: '',
		user: {
			id: 0,
			name: '',
			email: '',
			phone: '',
			role: '',
			image: ''
		},
		items: [],
		address: {
			id: 0,
			title: '',
			address: '',
			city: '',
			country: {
				id: 0,
				name: ''
			},
			postal: '',
			latitude: 0,
			longitude: 0
		},
		total: 0,
		currency: '',
		date: new Date
	};

	constructor(
		private languageService: LanguageService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.language = language.language;
			this.rtl = language.rtl;

			if (this.order.id !== 0) {
				this.loadOrder(this.order.id);
			}
		});
		this.subscriptions.push(subscription);

		subscription = this.route.params.subscribe(params => {
			let id = +params['order'] || 0;

			if (id !== 0) {
				this.loadOrder(id);
			}
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadOrder(id: number) {
		if (this.rtl) {
			this.order = {
				id: id,
				number: 'ABC-01',
				user: {
					id: 1,
					name: 'المستخدم',
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
							name: 'عنوان المنتج',
							slug: 'product-title',
							description: 'مساحة لوصف صغير للمنتج',
							rating: 4.33,
							price: 15.95,
							oldPrice: 20,
							currency: 'جنيه',
							sku: '',
							freshness: 'جديد',
							freshnessDescription: 'طازج جدا',
							farm: 'حقول مزرعة البقالة',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'قِطَع'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'أوروبا',
							selectedQuantity: {
								id: 0,
								quantity: 0,
								pack: ''
							},
							shipping: 'الشحن مجانا',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 2,
						price: 15.95,
						currency: 'جنيه'
					},
					{
						id: 2,
						product: {
							id: 2,
							name: 'عنوان المنتج',
							slug: 'product-title',
							description: 'مساحة لوصف صغير للمنتج',
							rating: 4.33,
							price: 9.95,
							oldPrice: 11,
							currency: 'جنيه',
							sku: '',
							freshness: 'جديد',
							freshnessDescription: 'طازج جدا',
							farm: 'حقول مزرعة البقالة',
							availablePacks: [
								{
									id: 1,
									stock: 10,
									pack: 'قِطَع'
								}
							],
							category: {
								id: 0,
								name: '',
								slug: '',
								subcategories: []
							},
							delivery: 'أوروبا',
							selectedQuantity: {
								id: 0,
								quantity: 0,
								pack: ''
							},
							shipping: 'الشحن مجانا',
							deliveryDays: 1,
							info: '',
							reviews: [],
							questions: [],
							images: []
						},
						quantity: 2,
						price: 9.95,
						currency: 'جنيه'
					}
				],
				address: {
					id: 1,
					title: 'العنوان الرئيسي',
					address: '1234 شارع فريشنس كوم',
					city: 'سان فرانسيسكو، كاليفورنيا',
					country: {
						id: 2,
						name: 'الولايات المتحدة الأمريكية'
					},
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				},
				total: 51.8,
				currency: 'جنيه',
				date: new Date('2020-6-22')
			}
		}
		else {
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
							name: 'Product title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 15.95,
							oldPrice: 20,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Farm Fields',
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
								id: 0,
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
						price: 15.95,
						currency: 'USD'
					},
					{
						id: 2,
						product: {
							id: 2,
							name: 'Product title',
							slug: 'product-title',
							description: 'Space for a small product description',
							rating: 4.33,
							price: 9.95,
							oldPrice: 11,
							currency: 'USD',
							sku: '',
							freshness: 'New',
							freshnessDescription: 'Extra fresh',
							farm: 'Grocery Farm Fields',
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
								id: 0,
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
						price: 9.95,
						currency: 'USD'
					}
				],
				address: {
					id: 1,
					title: 'Main address',
					address: '1234 Freshnesecom St',
					city: 'San Francisco, CA',
					country: {
						id: 2,
						name: 'USA'
					},
					postal: '12345',
					latitude: 31.259672,
					longitude: 29.996615
				},
				total: 51.8,
				currency: 'USD',
				date: new Date('2020-6-22')
			};
		}
	}
}
