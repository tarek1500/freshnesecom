import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Checkout', link: '' },
	];
	products: Product[];

	constructor() {
		this.products = [
			{
				id: 1,
				name: 'Product Title',
				slug: 'product-title',
				description: '',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: '1 day old',
				freshnessDescription: '',
				farm: 'Tharamis Farm',
				delivery: '',
				stock: 0,
				quantity: 1,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/112/200/100'
			},
			{
				id: 2,
				name: 'Product Title',
				slug: 'product-title',
				description: '',
				rating: 4.33,
				price: 36.99,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: '1 day old',
				freshnessDescription: '',
				farm: 'Tharamis Farm',
				delivery: '',
				stock: 0,
				quantity: 1,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/1080/200/100'
			}
		];
	}

	ngOnInit(): void {
	}

}
