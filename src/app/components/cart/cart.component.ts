import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
	@Input() cart!: Cart;
	@Output() onClose = new EventEmitter<null>();
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

	close(event: MouseEvent) {
		this.onClose.emit();
	}
}
