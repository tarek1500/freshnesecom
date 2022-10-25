import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../../services/rtl/rtl.service';
import { Quote } from '../../../interfaces/quote.interface';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {
	@Input() quote!: Quote;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
