import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cart } from '../../interfaces/cart.interface';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	@Input() cart!: Cart;
	@Output() onClose = new EventEmitter<null>();

	constructor() { }

	ngOnInit(): void { }

	close(event: MouseEvent) {
		this.onClose.emit();
	}
}
