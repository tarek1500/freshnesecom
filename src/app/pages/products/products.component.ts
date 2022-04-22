import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Fruit and vegetables', link: '' }
	];
	products: Product[];

	isGridView: boolean = true;
	priceValue: number[] = [0, 1000];
	minPrice: number = 0;
	maxPrice: number = 1000;

	constructor() {
		this.products = [
			{
				id: 1,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/112/600/300'
			},
			{
				id: 2,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/1080/600/300'
			},
			{
				id: 3,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 0,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/102/900/300'
			},
			{
				id: 4,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/107/600/300'
			},
			{
				id: 5,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/112/600/300'
			},
			{
				id: 6,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 0,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/1080/600/300'
			},
			{
				id: 7,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/102/900/300'
			},
			{
				id: 8,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 0,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/107/600/300'
			},
			{
				id: 9,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
				delivery: 'Europe',
				stock: 320,
				quantity: 0,
				shipping: 'Free Shipping',
				deliveryDays: 1,
				image: 'https://picsum.photos/id/112/600/300'
			},
		];
	}

	ngOnInit(): void {
	}

}
