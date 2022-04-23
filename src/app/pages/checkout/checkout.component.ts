import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Delivery } from '../../interfaces/delivery.interface';
import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit, OnDestroy {
	cartSubscription!: Subscription;
	@ViewChild('promoInput') promoInput!: ElementRef<HTMLDivElement>;
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

	ngAfterViewInit() {
		this.setInputGroupWidth(this.promoInput, 11);
	}

	ngOnDestroy(): void {
		this.cartSubscription.unsubscribe();
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
