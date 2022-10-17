import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductPack } from '../../interfaces/product-pack.interface';
import { Quantity } from '../../interfaces/quantity.interface';

@Component({
	selector: 'app-stock-input-group',
	templateUrl: './stock-input-group.component.html',
	styleUrls: ['./stock-input-group.component.scss']
})
export class StockInputGroupComponent implements OnInit {
	@Input() availablePacks!: ProductPack[];
	@Input() large: boolean = false;
	@Input() quantity!: Quantity;
	@Input() readonly: boolean = false;
	@Output() quantityChange: EventEmitter<Quantity> = new EventEmitter<Quantity>();
	selectedPack!: ProductPack;

	constructor() { }

	ngOnInit(): void {
		if (this.availablePacks.length > 1) {
			this.selectedPack = this.availablePacks[0];

			if (this.readonly) {
				this.quantity = {
					id: 0,
					quantity: this.selectedPack.stock,
					pack: this.selectedPack.pack
				};
			}
		}
	}

	onPackSelected(pack: ProductPack) {
		this.selectedPack = pack;
		this.quantity.pack = pack.pack;

		if (this.readonly) {
			this.quantity.quantity = this.selectedPack.stock;
		}
	}
}
