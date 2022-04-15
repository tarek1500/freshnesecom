import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-related-products',
	templateUrl: './related-products.component.html',
	styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
	@Input() heading: string = '';
	@Input('goto-button') gotoButton: string = '';

	constructor() { }

	ngOnInit(): void {
	}

}
