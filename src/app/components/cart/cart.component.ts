import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
	@Input() cart!: Cart;
	@Output() onClose = new EventEmitter<null>();
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	close(event: MouseEvent) {
		this.onClose.emit();
	}
}
