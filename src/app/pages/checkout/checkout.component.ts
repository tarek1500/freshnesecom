import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { CartService } from '../../services/cart/cart.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Country } from '../../interfaces/country.interface';
import { Delivery } from '../../interfaces/delivery.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.checkout', text: 'Checkout', link: '' },
	];
	countries!: Country[];
	deliveries!: Delivery[];
	cart!: Cart;
	deliveryDate!: Date;

	constructor(
		private languageService: LanguageService,
		private cartService: CartService
	) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadCountries();
			this.loadDeliveries();
			this.deliveryDate = new Date('2020-6-12');
		});
		this.subscriptions.push(subscription);

		subscription = this.cartService.cartSubject$.subscribe(cart => {
			this.cart = cart;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadCountries() {
		let countries = [
			{
				id: 1,
				name: 'Egypt'
			},
			{
				id: 2,
				name: 'USA'
			},
			{
				id: 3,
				name: 'UK'
			}
		];

		if (this.rtl) {
			countries = [
				{
					id: 1,
					name: 'مصر'
				},
				{
					id: 2,
					name: 'الولايات المتحدة الأمريكية'
				},
				{
					id: 3,
					name: 'المملكة المتحدة'
				}
			];
		}

		if (this.countries) {
			this.countries.map(country => {
				country.name = countries.find(localCountry => localCountry.id === country.id)!.name;
			});
		}
		else {
			this.countries = countries;
		}
	}

	loadDeliveries() {
		if (this.rtl) {
			this.deliveries = [
				{
					id: 1,
					name: 'فيديكس',
					price: 32,
					currency: 'جنيه',
					logo: '../../../assets/icons/fedex.svg'
				},
				{
					id: 2,
					name: 'دي إتش إل',
					price: 15,
					currency: 'جنيه',
					logo: '../../../assets/icons/dhl.svg'
				}
			];
		}
		else {
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
	}

	onPromoApplied(event: string) { }
}
