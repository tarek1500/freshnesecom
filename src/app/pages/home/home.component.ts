import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Category } from '../../interfaces/category.interface';
import { Recipe } from '../../interfaces/recipe.interface';
import { Product } from '../../interfaces/product.interface';
import { Quote } from '../../interfaces/quote.interface';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	categories!: Category[];
	recipes!: Recipe[];
	bestSelling!: Category[];
	bestSellingProducts!: Product[];
	bestFromFarmers!: Category[];
	quotesOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 1200,
		navText: ['', ''],
		margin: 32,
		responsive: {
			0: {
				items: 1
			},
			510: {
				items: 2
			},
			958: {
				items: 3
			}
		},
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1200,
		autoplayHoverPause: false
	};
	quotes!: Quote[];
	sectionProducts!: Product[];
	largeBlog!: Blog;
	mediumBlog!: Blog;
	smallBlogs!: Blog[];

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
			this.quotesOptions.rtl = this.rtl;

			this.loadData();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadData() {
		if (this.rtl) {
			this.categories = [
				{
					id: 1,
					name: 'مخبز ',
					slug: 'bakery',
					subcategories: []
				},
				{
					id: 2,
					name: 'فاكهة و خضراوات',
					slug: 'fruit-and-vegetables',
					subcategories: []
				},
				{
					id: 3,
					name: 'لحم و سمك',
					slug: 'meat-and-fish',
					subcategories: []
				},
				{
					id: 4,
					name: 'مشروبات',
					slug: 'drinks',
					subcategories: []
				},
				{
					id: 5,
					name: 'مطبخ',
					slug: 'kitchen',
					subcategories: []
				}
			];
			this.recipes = [
				{
					id: 1,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 2,
					title: 'مساحة للعنوان',
					slug: 'space-for-heading',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				}
			];
			this.bestSelling = [
				{
					id: 6,
					name: 'مطبخ',
					slug: 'kitchen',
					subcategories: []
				},
				{
					id: 7,
					name: 'لحم و سمك',
					slug: 'meat-and-fish',
					subcategories: []
				},
				{
					id: 8,
					name: 'تغذية خاصة',
					slug: 'special-nutrition',
					subcategories: []
				},
				{
					id: 9,
					name: 'صيدلة',
					slug: 'pharmacy',
					subcategories: []
				},
				{
					id: 10,
					name: 'مخبز',
					slug: 'bakery',
					subcategories: []
				}
			];
			this.bestSellingProducts = [
				{
					id: 1,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.12,
					oldPrice: 48.56,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				}
			];
			this.bestFromFarmers = [
				{
					id: 11,
					name: 'جزر',
					slug: 'carrots',
					subcategories: []
				},
				{
					id: 12,
					name: 'طماطم',
					slug: 'tomatoes',
					subcategories: []
				},
				{
					id: 13,
					name: 'بطاطس',
					slug: 'potatoes',
					subcategories: []
				},
				{
					id: 14,
					name: 'فراخ',
					slug: 'chicken',
					subcategories: []
				},
				{
					id: 15,
					name: 'لحم خنزير',
					slug: 'pork',
					subcategories: []
				}
			];
			this.quotes = [
				{
					id: 1,
					author: {
						id: 1,
						name: 'الاسم و اللقب',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“هذه مساحة فائقة لعرض اقتباس عملائك. لا تقلق، فهي تعمل بسلاسة. ستحصل على كل ما تحتاجه بكتابة نص هنا“'
				},
				{
					id: 2,
					author: {
						id: 2,
						name: 'الاسم و اللقب',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“هذه مساحة فائقة لعرض اقتباس عملائك. لا تقلق، فهي تعمل بسلاسة. ستحصل على كل ما تحتاجه بكتابة نص هنا“'
				},
				{
					id: 3,
					author: {
						id: 3,
						name: 'الاسم و اللقب',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“هذه مساحة فائقة لعرض اقتباس عملائك. لا تقلق، فهي تعمل بسلاسة. ستحصل على كل ما تحتاجه بكتابة نص هنا“'
				},
				{
					id: 4,
					author: {
						id: 4,
						name: 'الاسم و اللقب',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“هذه مساحة فائقة لعرض اقتباس عملائك. لا تقلق، فهي تعمل بسلاسة. ستحصل على كل ما تحتاجه بكتابة نص هنا“'
				}
			];
			this.sectionProducts = [
				{
					id: 1,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 3.26,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				},
				{
					id: 4,
					name: 'عنوان المنتج',
					slug: 'product-title',
					description: 'مساحة لوصف صغير للمنتج',
					rating: 4.33,
					price: 1.12,
					oldPrice: 0,
					currency: 'جنيه',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/107/400/200']
				}
			];
			this.largeBlog = {
				id: 1,
				title: 'نصائح الشيف لدينا لعشاء رائع ولذيذ جاهزة في 20 دقيقة',
				slug: 'our-chef-tips-for-a-great-and-tasty-dinner-ready-in-20-minutes',
				author: {
					id: 1,
					name: 'الكاتب',
					email: '',
					phone: '',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'نصائح العشاء',
						slug: 'dinner-tips'
					}
				],
				content: '',
				date: new Date('2020-6-17'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			};
			this.mediumBlog = {
				id: 2,
				title: 'ما هي الخضار التي ستحبها عائلتك وتريد تناولها كل يوم',
				slug: 'which-vegetable-your-family-will-love-and-wants-eat-each-day',
				author: {
					id: 2,
					name: 'الكاتب',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'الخضروات',
						slug: 'vegetable'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			};
			this.smallBlogs = [
				{
					id: 3,
					title: 'السلطة هي بداية جيدة نوعا ما لروتينك الصباحي',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 3,
						name: 'الكاتب',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				},
				{
					id: 4,
					title: 'السلطة هي بداية جيدة نوعا ما لروتينك الصباحي',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 4,
						name: 'الكاتب',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				},
				{
					id: 5,
					title: 'السلطة هي بداية جيدة نوعا ما لروتينك الصباحي',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 5,
						name: 'الكاتب',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				}
			];
		}
		else {
			this.categories = [
				{
					id: 1,
					name: 'Bakery',
					slug: 'bakery',
					subcategories: []
				},
				{
					id: 2,
					name: 'Fruit and vegetables',
					slug: 'fruit-and-vegetables',
					subcategories: []
				},
				{
					id: 3,
					name: 'Meat and fish',
					slug: 'meat-and-fish',
					subcategories: []
				},
				{
					id: 4,
					name: 'Drinks',
					slug: 'drinks',
					subcategories: []
				},
				{
					id: 5,
					name: 'Kitchen',
					slug: 'kitchen',
					subcategories: []
				}
			];
			this.recipes = [
				{
					id: 1,
					title: 'Greek milk pie – Galatopita',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 2,
					title: 'Space for heading',
					slug: 'space-for-heading',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				}
			];
			this.bestSelling = [
				{
					id: 6,
					name: 'Kitchen',
					slug: 'kitchen',
					subcategories: []
				},
				{
					id: 7,
					name: 'Meat and fish',
					slug: 'meat-and-fish',
					subcategories: []
				},
				{
					id: 8,
					name: 'Special nutrition',
					slug: 'special-nutrition',
					subcategories: []
				},
				{
					id: 9,
					name: 'Pharmacy',
					slug: 'pharmacy',
					subcategories: []
				},
				{
					id: 10,
					name: 'Bakery',
					slug: 'bakery',
					subcategories: []
				}
			];
			this.bestSellingProducts = [
				{
					id: 1,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.12,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				}
			];
			this.bestFromFarmers = [
				{
					id: 11,
					name: 'Carrots',
					slug: 'carrots',
					subcategories: []
				},
				{
					id: 12,
					name: 'Tomatoes',
					slug: 'tomatoes',
					subcategories: []
				},
				{
					id: 13,
					name: 'Potatoes',
					slug: 'potatoes',
					subcategories: []
				},
				{
					id: 14,
					name: 'Chicken',
					slug: 'chicken',
					subcategories: []
				},
				{
					id: 15,
					name: 'Pork',
					slug: 'pork',
					subcategories: []
				}
			];
			this.quotes = [
				{
					id: 1,
					author: {
						id: 1,
						name: 'Name and surname',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here“'
				},
				{
					id: 2,
					author: {
						id: 2,
						name: 'Name and surname',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here“'
				},
				{
					id: 3,
					author: {
						id: 3,
						name: 'Name and surname',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here“'
				},
				{
					id: 4,
					author: {
						id: 4,
						name: 'Name and surname',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					content: '“This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here“'
				}
			];
			this.sectionProducts = [
				{
					id: 1,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 3.26,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/112/400/200']
				},
				{
					id: 2,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.48,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/1080/400/200']
				},
				{
					id: 3,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 0.28,
					oldPrice: 48.56,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/102/600/200']
				},
				{
					id: 4,
					name: 'Product title',
					slug: 'product-title',
					description: 'Space for a small product description',
					rating: 4.33,
					price: 1.12,
					oldPrice: 0,
					currency: 'USD',
					sku: '',
					freshness: '',
					freshnessDescription: '',
					farm: '',
					availablePacks: [],
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					delivery: '',
					selectedQuantity: {
						id: 0,
						quantity: 0,
						pack: ''
					},
					shipping: '',
					deliveryDays: 0,
					info: '',
					reviews: [],
					questions: [],
					images: ['https://picsum.photos/id/107/400/200']
				}
			];
			this.largeBlog = {
				id: 1,
				title: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
				slug: 'our-chef-tips-for-a-great-and-tasty-dinner-ready-in-20-minutes',
				author: {
					id: 1,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Dinner tips',
						slug: 'dinner-tips'
					}
				],
				content: '',
				date: new Date('2020-6-17'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			};
			this.mediumBlog = {
				id: 2,
				title: 'Which vegetable your family will love and want’s eat each day',
				slug: 'which-vegetable-your-family-will-love-and-wants-eat-each-day',
				author: {
					id: 2,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Vegetable',
						slug: 'vegetable'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			};
			this.smallBlogs = [
				{
					id: 3,
					title: 'Salad is kinda good start to your morning routines',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 3,
						name: 'Author',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				},
				{
					id: 4,
					title: 'Salad is kinda good start to your morning routines',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 4,
						name: 'Author',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				},
				{
					id: 5,
					title: 'Salad is kinda good start to your morning routines',
					slug: 'salad-is-kinda-good-start-to-your-morning-routines',
					author: {
						id: 5,
						name: 'Author',
						email: '',
						phone: '',
						role: '',
						image: ''
					},
					category: {
						id: 0,
						name: '',
						slug: '',
						subcategories: []
					},
					tags: [],
					content: '',
					date: new Date('2020-1-14'),
					comments: [],
					image: 'https://picsum.photos/seed/picsum/300/300'
				}
			];
		}
	}
}
