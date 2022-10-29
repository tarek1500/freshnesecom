import { Component, OnInit } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';
import { Review } from '../../interfaces/review.interface';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'Products', link: '/products' },
		{ translate: '', text: '', link: '' },
	];
	product: Product;
	discount: number = 0;
	review: Review;
	relatedProducts: Product[];

	constructor() {
		this.product = {
			id: 1,
			name: 'Carrots from Tomissy Farm',
			slug: 'carrots-from-tomissy-farm',
			description: 'Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.',
			rating: 2.4,
			price: 36.23,
			oldPrice: 48.56,
			currency: 'USD',
			sku: '76645',
			freshness: '1 days old',
			freshnessDescription: '',
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
				id: 1,
				name: 'Vegetables',
				slug: 'vegetables',
				subcategories: []
			},
			delivery: 'Czech republic',
			selectedQuantity: {
				id: 0,
				quantity: 0,
				pack: ''
			},
			shipping: 'Free shipping',
			deliveryDays: 2,
			info: '<h3 class="heading">Origins</h3><p class="details">We work hard to ensure that the fruits and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p><h3 class="heading">How to cook</h3><p class="details">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p><h3 class="heading">Full of Vitamins!</h3><div class="table-responsive"><table class="table"><thead><tr><th>Vitamins</th><th>Quantity</th><th>% DV</th></tr></thead><tbody><tr><td>Vitamin A equiv.</td><td>735 μg</td><td>104 %</td></tr><tr><td>Thiamine (B1)</td><td>0.066 mg</td><td>6 %</td></tr><tr><td>Niacin (B3)</td><td>0.983 mg</td><td>7 %</td></tr><tr><td>Folate (Bg)</td><td>19 μg</td><td>5 %</td></tr><tr><td>Vitamin C</td><td>5.9 mg</td><td>7 %</td></tr><tr><td>Vitamin E</td><td>0.66 mg</td><td>4 %</td></tr><tr><td>Vitamin K</td><td>13.2</td><td>13 %</td></tr></tbody></table></div>',
			reviews: [
				{
					id: 1,
					author: 'Author',
					date: new Date('2020-06-22'),
					rating: 4,
					content: 'Review content goes here'
				},
				{
					id: 2,
					author: 'Author',
					date: new Date('2020-06-22'),
					rating: 5,
					content: 'Review content goes here'
				},
				{
					id: 3,
					author: 'Author',
					date: new Date('2020-06-22'),
					rating: 2,
					content: 'Review content goes here'
				},
				{
					id: 4,
					author: 'Author',
					date: new Date('2020-06-22'),
					rating: 1,
					content: 'Review content goes here'
				}
			],
			questions: [
				{
					id: 1,
					content: 'Simple question?',
					answer: 'Answer goes here'
				},
				{
					id: 2,
					content: 'Simple question?',
					answer: 'Answer goes here'
				},
				{
					id: 3,
					content: 'Simple question?',
					answer: 'Answer goes here'
				},
				{
					id: 4,
					content: 'Simple question?',
					answer: 'Answer goes here'
				}
			],
			images: ['https://picsum.photos/id/112/1400/1000', 'https://picsum.photos/id/1080/1400/1000', 'https://picsum.photos/id/102/1400/1000']
		};
		this.review = {
			id: 0,
			author: '',
			date: new Date(),
			rating: 0,
			content: ''
		};
		this.relatedProducts = [
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
	}

	ngOnInit(): void {
		// Fetch product form server
		this.breadcrumb[2].text = this.product.name;

		if (this.product.oldPrice != 0) {
			this.discount = Math.round((this.product.oldPrice - this.product.price) / this.product.oldPrice * 100);
		}
	}

	scrollToReviews(event: MouseEvent, info: HTMLDivElement, nav: NgbNav) {
		event.preventDefault();

		nav.select('reviews');

		info.scrollIntoView();
	}
}
