import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-compare',
	templateUrl: './compare.component.html',
	styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.compare', text: 'Compare', link: '' }
	];
	products!: Product[]

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadProducts();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadProducts() {
		if (this.rtl) {
			this.products = [
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
			];
		}
	}
}
