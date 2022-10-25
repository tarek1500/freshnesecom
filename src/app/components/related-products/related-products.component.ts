import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-related-products',
	templateUrl: './related-products.component.html',
	styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit, OnDestroy {
	@Input() heading: string = '';
	@Input('goto-button') gotoButton: string = '';
	@Input() products!: Product[];
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
