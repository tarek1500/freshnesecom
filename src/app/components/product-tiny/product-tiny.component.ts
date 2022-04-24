import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductPack } from '../../interfaces/product-pack.interface';

@Component({
	selector: 'app-product-tiny',
	templateUrl: './product-tiny.component.html',
	styleUrls: ['./product-tiny.component.scss']
})
export class ProductTinyComponent implements OnInit {
	@Input() product!: Product;
	selectedPack!: ProductPack;

	constructor() { }

	ngOnInit(): void {
		this.selectedPack = this.product.availablePacks[0];
	}

	onPackSelected(pack: ProductPack) {
		this.selectedPack = pack;
		this.product.selectedQuantity.pack = pack.pack;
	}

}
