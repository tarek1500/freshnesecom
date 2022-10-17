import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-related-products',
	templateUrl: './related-products.component.html',
	styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
	@Input() heading: string = '';
	@Input('goto-button') gotoButton: string = '';
	@Input() products!: Product[];

	constructor() { }

	ngOnInit(): void { }
}
