import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Products', link: '/products' },
		{ text: '', link: '' },
	];
	product: Product;
	discount: number = 0;
	relatedProducts: Product[];

	constructor() {
		this.product = {
			id: 1,
			name: 'Carrots from Tomissy Farm',
			slug: 'carrots-from-tomissy-farm',
			description: 'Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.',
			rating: 4.33,
			price: 36.23,
			oldPrice: 48.56,
			currency: 'USD',
			sku: '76645',
			freshness: '1 days old',
			freshnessDescription: '',
			farm: 'Grocery Tarm Fields',
			buyBy: 'pcs, kgs, box, pack',
			category: {
				id: 1,
				name: 'Vegetables',
				slug: 'vegetables',
				subcategories: []
			},
			delivery: 'Czech republic',
			stock: 320,
			quantity: 0,
			shipping: 'Free shipping',
			deliveryDays: 2,
			info: '<h3 class="heading">Origins</h3><p class="details">We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p><h3 class="heading">How to cook</h3><p class="details">From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p><h3 class="heading">Full of Vitamins!</h3><table class="table"><thead><tr><th>Vitamins</th><th>Quantity</th><th>% DV</th></tr></thead><tbody><tr><td>Vitamin A equiv.</td><td>735 μg</td><td>104 %</td></tr><tr><td>Thiamine (B1)</td><td>0.066 mg</td><td>6 %</td></tr><tr><td>Niacin (B3)</td><td>0.983 mg</td><td>7 %</td></tr><tr><td>Folate (Bg)</td><td>19 μg</td><td>5 %</td></tr><tr><td>Vitamin C</td><td>5.9 mg</td><td>7 %</td></tr><tr><td>Vitamin E</td><td>0.66 mg</td><td>4 %</td></tr><tr><td>Vitamin K</td><td>13.2</td><td>13 %</td></tr></tbody></table>',
			reviews: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				},
				{
					id: 6
				},
				{
					id: 7
				},
				{
					id: 8
				},
				{
					id: 9
				},
				{
					id: 10
				},
				{
					id: 11
				},
				{
					id: 12
				},
				{
					id: 13
				},
				{
					id: 14
				},
				{
					id: 15
				},
				{
					id: 16
				},
				{
					id: 17
				},
				{
					id: 18
				}
			],
			questions: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				}
			],
			images: ['https://picsum.photos/id/112/1400/1000', 'https://picsum.photos/id/1080/1400/1000', 'https://picsum.photos/id/102/1400/1000']
		};
		this.relatedProducts = [
			{
				id: 1,
				name: 'Product Title',
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
				buyBy: '',
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				info: '',
				reviews: [],
				questions: [],
				images: ['https://picsum.photos/id/112/400/200']
			},
			{
				id: 2,
				name: 'Product Title',
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
				buyBy: '',
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				info: '',
				reviews: [],
				questions: [],
				images: ['https://picsum.photos/id/1080/400/200']
			},
			{
				id: 3,
				name: 'Product Title',
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
				buyBy: '',
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				info: '',
				reviews: [],
				questions: [],
				images: ['https://picsum.photos/id/102/600/200']
			},
			{
				id: 4,
				name: 'Product Title',
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
				buyBy: '',
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				delivery: '',
				stock: 0,
				quantity: 0,
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

}
