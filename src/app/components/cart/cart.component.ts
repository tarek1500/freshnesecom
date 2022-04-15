import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	@Output() onClose = new EventEmitter<null>();

	constructor() { }

	ngOnInit(): void {
	}

	close(event: MouseEvent) {
		this.onClose.emit();
	}
}
