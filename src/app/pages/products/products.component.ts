import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options as SliderOptions } from '@angular-slider/ngx-slider';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Category } from '../../interfaces/category.interface';
import { Tag } from '../../interfaces/tag.interface';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	category: Category = {
		id: 0,
		name: '',
		slug: '',
		subcategories: []
	};
	tag: Tag = {
		id: 0,
		name: '',
		slug: ''
	};
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.products', text: 'Products', link: '' }
	];
	title!: string;
	products!: Product[];
	isGridView: boolean = true;
	sliderOptions: SliderOptions = {
		floor: 0,
		ceil: 1000
	};
	priceValue: number[] = [0, 1000];

	constructor(
		private languageService: LanguageService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		let subscription = this.route.data.subscribe(data => {
			let name = data['name'];

			let subscription = this.languageService.languageSubject$.subscribe(language => {
				this.rtl = language.rtl;

				if (this.rtl) {
					this.sliderOptions = { ...this.sliderOptions, rightToLeft: true };
				}
				else {
					this.sliderOptions = { ...this.sliderOptions, rightToLeft: false };
				}

				if (name) {
					if (this.category.id !== 0) {
						this.loadCategory(this.category.slug);
					}
					else if (this.tag.id !== 0) {
						this.loadTag(this.tag.slug);
					}
				}
				else {
					this.title = 'translate.components.breadcrumb.products';

					this.loadProducts();
				}
			});
			this.subscriptions.push(subscription);

			if (name) {
				subscription = this.route.params.subscribe(params => {
					let slug = params['slug'];

					switch (name) {
						case 'categories.products':
							this.loadCategory(slug);

							break;
						case 'tags.products':
							this.loadTag(slug);

							break;
					}
				});
				this.subscriptions.push(subscription);
			}
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadCategory(slug: string) {
		if (this.rtl) {
			this.category = {
				id: 1,
				name: 'فاكهة و خضراوات',
				slug: slug,
				subcategories: []
			};
		}
		else {
			this.category = {
				id: 1,
				name: 'Fruits and vegetables',
				slug: slug,
				subcategories: []
			};
		}

		this.breadcrumb[1].translate = '';
		this.breadcrumb[1].text = this.category.name;
		this.title = this.category.name;

		this.loadProducts(this.category);
	}

	loadTag(slug: string) {
		if (this.rtl) {
			this.tag = {
				id: 1,
				name: 'خضراوات',
				slug: slug
			};
		}
		else {
			this.tag = {
				id: 1,
				name: 'Vegetable',
				slug: slug
			};
		}

		this.breadcrumb[1].translate = '';
		this.breadcrumb[1].text = this.tag.name;
		this.title = this.tag.name;

		this.loadProducts(this.tag);
	}

	loadProducts(parent?: Category | Tag) {
		if (this.rtl) {
			this.products = [
				{
					id: 1,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 28.99,
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
					price: 29.99,
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
					price: 30.99,
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
					price: 31.99,
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
				},
				{
					id: 5,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 32.99,
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
					id: 6,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 33.99,
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
					images: ['https://picsum.photos/id/1080/600/300']
				},
				{
					id: 7,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 34.99,
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
					images: ['https://picsum.photos/id/102/900/300']
				},
				{
					id: 8,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 35.99,
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
					images: ['https://picsum.photos/id/107/600/300']
				},
				{
					id: 9,
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
				}
			];
		}
		else {
			this.products = [
				{
					id: 1,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 28.99,
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
					price: 29.99,
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
					price: 30.99,
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
					price: 31.99,
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
				},
				{
					id: 5,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 32.99,
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
					id: 6,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 33.99,
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
					images: ['https://picsum.photos/id/1080/600/300']
				},
				{
					id: 7,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 34.99,
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
					images: ['https://picsum.photos/id/102/900/300']
				},
				{
					id: 8,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 35.99,
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
					images: ['https://picsum.photos/id/107/600/300']
				},
				{
					id: 9,
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
				}
			];
		}

		this.sliderOptions.floor = Math.min(...this.products.map(product => product.price));
		this.sliderOptions.ceil = Math.max(...this.products.map(product => product.price));
		this.priceValue = [this.sliderOptions.floor, this.sliderOptions.ceil];
	}
}
