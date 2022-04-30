import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart/cart.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Delivery } from '../../interfaces/delivery.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
	cartSubscription!: Subscription;
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Checkout', link: '' },
	];
	deliveries: Delivery[];
	cart!: Cart;

	constructor(private cartService: CartService) {
		this.deliveries = [
			{
				id: 1,
				name: 'FedEx',
				price: 32,
				currency: 'USD',
				logo: '../../../assets/icons/fedex.svg'
			},
			{
				id: 2,
				name: 'DHL',
				price: 15,
				currency: 'USD',
				logo: '../../../assets/icons/dhl.svg'
			}
		];
	}

	ngOnInit(): void {
		this.cartSubscription = this.cartService.cartSubject$.subscribe(cart => {
			this.cart = cart;
		});
	}

	ngOnDestroy(): void {
		this.cartSubscription.unsubscribe();
	}

	onPromoApplied(event: string) { }

}
