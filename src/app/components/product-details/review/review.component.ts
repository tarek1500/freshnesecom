import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { LanguageService } from '../../../services/language/language.service';
import { Review } from '../../../interfaces/review.interface';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit, OnDestroy {
	@Input() review!: Review;
	moment: any = moment;
	subscriptions: Subscription[] = [];
	language: string = 'en';
	rtl: boolean = false;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.language = language.language;
			this.rtl = language.rtl;

			moment.locale(this.language);
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
