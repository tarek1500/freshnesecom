import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../../services/language/language.service';
import { Blog } from '../../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-small',
	templateUrl: './blog-small.component.html',
	styleUrls: ['./blog-small.component.scss']
})
export class BlogSmallComponent implements OnInit, OnDestroy {
	@Input() blog!: Blog;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
