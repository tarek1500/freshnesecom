import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ProductPack } from '../../interfaces/product-pack.interface';
import { Quantity } from '../../interfaces/quantity.interface';

@Component({
	selector: 'app-stock-input-group',
	templateUrl: './stock-input-group.component.html',
	styleUrls: ['./stock-input-group.component.scss']
})
export class StockInputGroupComponent implements OnInit, OnDestroy {
	@Input() availablePacks!: ProductPack[];
	@Input() large: boolean = false;
	@Input() quantity!: Quantity;
	@Input() readonly: boolean = false;
	@Output() quantityChange: EventEmitter<Quantity> = new EventEmitter<Quantity>();
	translateSubscription!: Subscription;
	rtl: boolean = false;
	selectedPack!: ProductPack;

	constructor(private translateService: TranslateService) { }

	ngOnInit(): void {
		this.translateSubscription = this.translateService.onLangChange.subscribe(event => {
			this.rtl = event.translations.direction === 'rtl';
		});

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

	ngOnDestroy(): void {
		this.translateSubscription.unsubscribe();
	}

	onPackSelected(pack: ProductPack) {
		this.selectedPack = pack;
		this.quantity.pack = pack.pack;

		if (this.readonly) {
			this.quantity.quantity = this.selectedPack.stock;
		}
	}
}
