import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Fruit and vegetables', link: '' },
	]

	isGridView: boolean = true;
	priceValue: number[] = [0, 1000];
	minPrice: number = 0;
	maxPrice: number = 1000;

	constructor() { }

	ngOnInit(): void {
	}

}
