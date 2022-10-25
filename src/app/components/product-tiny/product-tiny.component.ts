import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product-tiny',
	templateUrl: './product-tiny.component.html',
	styleUrls: ['./product-tiny.component.scss']
})
export class ProductTinyComponent implements OnInit, OnDestroy {
	@Input() product!: Product;
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
