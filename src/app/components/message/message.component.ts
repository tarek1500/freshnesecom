import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Message } from '../../interfaces/message.interface';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
	@Input() message!: Message;
	@Input('from-other') fromOther: boolean = false;
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
