import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { RtlService } from './services/rtl/rtl.service';
import { LoaderService } from './services/loader/loader.service';
import { CartService } from './services/cart/cart.service';
import { WishlistService } from './services/wishlist/wishlist.service';
import { Cart } from './interfaces/cart.interface';
import { Wishlist } from './interfaces/wishlist.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'freshnesecom';
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	showLoader: boolean = false;

	constructor(
		private translateService: TranslateService,
		private rtlService: RtlService,
		private loaderService: LoaderService,
		private cartService: CartService,
		private wishlistService: WishlistService
	) { }

	ngOnInit(): void {
		let subscription = this.translateService.onLangChange.subscribe(event => {
			this.rtl = event.translations.direction === 'rtl';

			this.rtlService.updateValue(this.rtl);
			this.loadCart();
			this.loadWishlist();
		});
		this.subscriptions.push(subscription);

		subscription = this.loaderService.loaderSubject$.subscribe(showLoader => {
			this.showLoader = showLoader;
		});
		this.subscriptions.push(subscription);

		this.translateService.setDefaultLang('en');
		this.translateService.use('ar');
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadCart() {
		let cart: Cart = {
			id: 1,
			products: [
				{
					id: 1,
					name: 'Product title',
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
					images: ['https://picsum.photos/id/112/200/100']
				},
				{
					id: 2,
					name: 'Product title',
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
					name: 'Product title',
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
					name: 'Product title',
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

		if (this.rtl) {
			cart = {
				id: 1,
				products: [
					{
						id: 1,
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: '',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
						currency: 'جنيه',
						sku: '',
						freshness: 'يوم واحد',
						freshnessDescription: '',
						farm: 'مزرعة تاراميس',
						availablePacks: [
							{
								id: 1,
								stock: 10,
								pack: 'قِطَع'
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
							pack: 'قِطَع'
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
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: '',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
						currency: 'جنيه',
						sku: '',
						freshness: 'يوم واحد',
						freshnessDescription: '',
						farm: 'مزرعة تاراميس',
						availablePacks: [
							{
								id: 1,
								stock: 10,
								pack: 'قِطَع'
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
							pack: 'قِطَع'
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
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: '',
						rating: 4.33,
						price: 36.99,
						oldPrice: 0,
						currency: 'جنيه',
						sku: '',
						freshness: 'يوم واحد',
						freshnessDescription: '',
						farm: 'مزرعة تاراميس',
						availablePacks: [
							{
								id: 1,
								stock: 10,
								pack: 'قِطَع'
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
							pack: 'قِطَع'
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
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: '',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
						currency: 'جنيه',
						sku: '',
						freshness: 'يوم واحد',
						freshnessDescription: '',
						farm: 'مزرعة تاراميس',
						availablePacks: [
							{
								id: 1,
								stock: 10,
								pack: 'قِطَع'
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
							pack: 'قِطَع'
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
				currency: 'جنيه'
			};
		}

		this.cartService.updateValue(cart);
	}

	loadWishlist() {
		let wishlist: Wishlist = {
			id: 1,
			products: [
				{
					id: 1,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
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
					images: ['https://picsum.photos/id/112/600/300']
				},
				{
					id: 2,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
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
					images: ['https://picsum.photos/id/1080/600/300']
				},
				{
					id: 3,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 36.99,
					oldPrice: 0,
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
					images: ['https://picsum.photos/id/102/900/300']
				},
				{
					id: 4,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
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
					images: ['https://picsum.photos/id/107/600/300']
				}
			]
		};

		if (this.rtl) {
			wishlist = {
				id: 1,
				products: [
					{
						id: 1,
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: 'مساحة لوصف صغير للمنتج',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
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
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
						images: ['https://picsum.photos/id/112/600/300']
					},
					{
						id: 2,
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: 'مساحة لوصف صغير للمنتج',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
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
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
						images: ['https://picsum.photos/id/1080/600/300']
					},
					{
						id: 3,
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: 'مساحة لوصف صغير للمنتج',
						rating: 4.33,
						price: 36.99,
						oldPrice: 0,
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
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
						images: ['https://picsum.photos/id/102/900/300']
					},
					{
						id: 4,
						name: 'عنوان المنتج',
						slug: 'product-title',
						description: 'مساحة لوصف صغير للمنتج',
						rating: 4.33,
						price: 36.99,
						oldPrice: 48.56,
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
							},
							{
								id: 2,
								stock: 20,
								pack: 'كيلوجرام'
							},
							{
								id: 3,
								stock: 1,
								pack: 'صندوق'
							},
							{
								id: 4,
								stock: 2,
								pack: 'حزمة'
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
						images: ['https://picsum.photos/id/107/600/300']
					}
				]
			};
		}

		this.wishlistService.updateValue(wishlist);
	}
}
