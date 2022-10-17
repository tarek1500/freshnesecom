import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-compare',
	templateUrl: './compare.component.html',
	styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Compare', link: '' }
	];
	products!: Product[]

	constructor() { }

	ngOnInit(): void {
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
				sku: '',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
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
					id:0,
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
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				sku: '',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
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
					id:0,
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
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 0,
				currency: 'USD',
				sku: '',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
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
					id:0,
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
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				sku: '',
				freshness: 'New',
				freshnessDescription: 'Extra fresh',
				farm: 'Grocery Tarm Fields',
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
					id:0,
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
