import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { ProductPack } from '../../interfaces/product-pack.interface';
import { Quantity } from '../../interfaces/quantity.interface';

@Component({
	selector: 'app-stock-input-group',
	templateUrl: './stock-input-group.component.html',
	styleUrls: ['./stock-input-group.component.scss']
})
export class StockInputGroupComponent implements OnInit, OnChanges, OnDestroy {
	@Input() availablePacks!: ProductPack[];
	@Input() large: boolean = false;
	@Input() quantity!: Quantity;
	@Input() readonly: boolean = false;
	@Output() quantityChange: EventEmitter<Quantity> = new EventEmitter<Quantity>();
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	selectedPack!: ProductPack;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);

		if (this.availablePacks.length > 0) {
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

	ngOnChanges(changes: SimpleChanges) {
		if (changes['availablePacks'].currentValue !== changes['availablePacks'].previousValue) {
			this.selectedPack = this.availablePacks.find(pack => pack.id === this.selectedPack.id)!;
		}
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	onPackSelected(pack: ProductPack) {
		this.selectedPack = pack;
		this.quantity.pack = pack.pack;

		if (this.readonly) {
			this.quantity.quantity = this.selectedPack.stock;
		}
	}
}
