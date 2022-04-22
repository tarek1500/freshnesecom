import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product-tiny',
	templateUrl: './product-tiny.component.html',
	styleUrls: ['./product-tiny.component.scss']
})
export class ProductTinyComponent implements OnInit {
	@Input() product!: Product;

	constructor() { }

	ngOnInit(): void {
	}

}
