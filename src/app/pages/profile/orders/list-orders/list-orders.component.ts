import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../../../services/rtl/rtl.service';
import { Order } from '../../../../interfaces/order.interface';

@Component({
	selector: 'app-list-orders',
	templateUrl: './list-orders.component.html',
	styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	orders!: Order[];

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadOrders();
		});
		this.subscriptions.push(subscription);
	}

	loadOrders() {
		if (this.rtl) {
			this.orders = [
				{
					id: 1,
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
				},
				{
					id: 2,
					number: 'ABC-02',
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
							id: 3,
							product: {
								id: 3,
								name: 'عنوان المنتج',
								slug: 'product-title',
								description: 'مساحة لوصف صغير للمنتج',
								rating: 4.33,
								price: 20,
								oldPrice: 25,
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
							quantity: 3,
							price: 20,
							currency: 'جنيه'
						},
						{
							id: 4,
							product: {
								id: 4,
								name: 'عنوان المنتج',
								slug: 'product-title',
								description: 'مساحة لوصف صغير للمنتج',
								rating: 4.33,
								price: 11,
								oldPrice: 13.95,
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
							quantity: 3,
							price: 11,
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
					total: 93,
					currency: 'جنيه',
					date: new Date('2020-6-15')
				}
			];
		}
		else {
			this.orders = [
				{
					id: 1,
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
								shipping: 'Free shipping',
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
								shipping: 'Free shipping',
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
				},
				{
					id: 2,
					number: 'ABC-02',
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
							id: 3,
							product: {
								id: 3,
								name: 'Product title',
								slug: 'product-title',
								description: 'Space for a small product description',
								rating: 4.33,
								price: 20,
								oldPrice: 25,
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
								shipping: 'Free shipping',
								deliveryDays: 1,
								info: '',
								reviews: [],
								questions: [],
								images: []
							},
							quantity: 3,
							price: 20,
							currency: 'USD'
						},
						{
							id: 4,
							product: {
								id: 4,
								name: 'Product title',
								slug: 'product-title',
								description: 'Space for a small product description',
								rating: 4.33,
								price: 11,
								oldPrice: 13.95,
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
								shipping: 'Free shipping',
								deliveryDays: 1,
								info: '',
								reviews: [],
								questions: [],
								images: []
							},
							quantity: 3,
							price: 11,
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
					total: 93,
					currency: 'USD',
					date: new Date('2020-6-15')
				}
			];
		}
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
