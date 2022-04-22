import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
	category!: Category;
	tag!: Tag;
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: '', link: '' }
	];
	products: Product[];

	isGridView: boolean = true;
	priceValue: number[] = [0, 1000];
	minPrice: number = 0;
	maxPrice: number = 1000;

	constructor(private route: ActivatedRoute) {
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
		let subscription = this.route.data.subscribe(data => {
			let name = data['name'];

			if (name) {
				let subscription = this.route.params.subscribe(params => {
					let slug: string = params['slug'];

					switch (name) {
						case 'products.categories':
							// Fetch category and its products from server
							this.category = {
								id: 0,
								name: 'Fruit and vegetables',
								slug: slug,
								subcategories: []
							};
							this.breadcrumb[1].text = this.category.name;

							break;
						case 'products.tags':
							// Fetch tag and its products from server
							this.tag = {
								id: 0,
								name: 'Vegetable',
								slug: slug
							};
							this.breadcrumb[1].text = this.tag.name;

							break;
					}
				});

				this.subscriptions.push(subscription);
			}
			else {
				this.breadcrumb[1].text = 'Products';
			}
		});

		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

}
