import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { LanguageService } from '../../services/language/language.service';
import { Comment } from '../../interfaces/comment.interface';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnDestroy {
	@Input() comment!: Comment;
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
