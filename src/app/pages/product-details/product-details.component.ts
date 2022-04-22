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
		{ text: 'Fruit and vegetables', link: '/products' },
		{ text: 'Carrots from Tomissy Farm', link: '' },
	];
	relatedProducts: Product[];

	constructor() {
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
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/112/400/200'
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
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/1080/400/200'
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
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/102/600/200'
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
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				stock: 0,
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/107/400/200'
			}
		];
	}

	ngOnInit(): void {
	}

}
