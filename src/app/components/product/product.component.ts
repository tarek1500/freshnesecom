import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Product } from '../../interfaces/product.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
	@Input() product!: Product;
	@Input() size: string = 'small';
	@Input('show-wishlist') showWishlist: boolean = true;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	discount: number = 0;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);

		if (this.product.oldPrice != 0) {
			this.discount = Math.round((this.product.oldPrice - this.product.price) / this.product.oldPrice * 100);
		}
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
