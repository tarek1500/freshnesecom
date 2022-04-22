import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Delivery } from '../../interfaces/delivery.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
	@ViewChild('promoInput') promoInput!: ElementRef<HTMLDivElement>;
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Checkout', link: '' },
	];
	deliveries: Delivery[];
	cart: Cart;

	constructor() {
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
		this.cart = {
			id: 1,
			products: [
				{
					id: 1,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
					currency: 'USD',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					image: 'https://picsum.photos/id/112/200/100'
				},
				{
					id: 2,
					name: 'Product Title',
					slug: 'product-title',
					description: '',
					rating: 4.33,
					price: 36.99,
					oldPrice: 48.56,
					currency: 'USD',
					freshness: '1 day old',
					freshnessDescription: '',
					farm: 'Tharamis Farm',
					delivery: '',
					stock: 0,
					quantity: 1,
					shipping: '',
					deliveryDays: 0,
					image: 'https://picsum.photos/id/1080/200/100'
				}
			],
			subtotal: 73.98,
			tax: 16.53,
			shipping: 0,
			currency: 'USD'
		};
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.setInputGroupWidth(this.promoInput, 11);
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		this.setInputGroupWidth(this.promoInput);
	}

	setInputGroupWidth(inputGroupPrepend: ElementRef<HTMLDivElement>, sizeFixer: number = 0) {
		let parent = inputGroupPrepend.nativeElement.parentElement as HTMLDivElement;
		let parentWidth = parent.offsetWidth;
		let nextItem = inputGroupPrepend.nativeElement.nextElementSibling as HTMLButtonElement;
		let nextItemWidth = nextItem.offsetWidth;

		inputGroupPrepend.nativeElement.style.width = (parentWidth - nextItemWidth - sizeFixer) + 'px';
	}

}
