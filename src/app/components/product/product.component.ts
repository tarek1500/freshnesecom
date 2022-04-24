import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductPack } from '../../interfaces/product-pack.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product!: Product;
	@Input() size: string = 'small';
	selectedPack!: ProductPack;
	discount: number = 0;

	constructor() { }

	ngOnInit(): void {
		this.selectedPack = this.product.availablePacks[0];

		if (this.product.oldPrice != 0) {
			this.discount = Math.round((this.product.oldPrice - this.product.price) / this.product.oldPrice * 100);
		}
	}

	onPackSelected(pack: ProductPack) {
		this.selectedPack = pack;
	}

}
