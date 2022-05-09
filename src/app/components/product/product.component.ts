import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product!: Product;
	@Input() size: string = 'small';
	@Input('show-wishlist') showWishlist: boolean = true;
	discount: number = 0;

	constructor() { }

	ngOnInit(): void {
		if (this.product.oldPrice != 0) {
			this.discount = Math.round((this.product.oldPrice - this.product.price) / this.product.oldPrice * 100);
		}
	}

}
