import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	isGridView: boolean = true;
	priceValue: number[] = [0, 1000];
	minPrice: number = 0;
	maxPrice: number = 1000;

	constructor() { }

	ngOnInit(): void {
	}

}
