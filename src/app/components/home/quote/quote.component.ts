import { Component, Input, OnInit } from '@angular/core';

import { Quote } from '../../../interfaces/quote.interface';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
	@Input() quote!: Quote;

	constructor() { }

	ngOnInit(): void { }
}
