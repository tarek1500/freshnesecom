import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product-tiny',
	templateUrl: './product-tiny.component.html',
	styleUrls: ['./product-tiny.component.scss']
})
export class ProductTinyComponent implements OnInit, OnDestroy {
	@Input() product!: Product;
	translateSubscription!: Subscription;
	rtl: boolean = false;

	constructor(private translateService: TranslateService) { }

	ngOnInit(): void {
		this.translateSubscription = this.translateService.onLangChange.subscribe(event => {
			this.rtl = event.translations.direction === 'rtl';
		});
	}

	ngOnDestroy(): void {
		this.translateSubscription.unsubscribe();
	}
}
