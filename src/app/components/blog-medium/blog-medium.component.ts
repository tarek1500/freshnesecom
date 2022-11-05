import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-medium',
	templateUrl: './blog-medium.component.html',
	styleUrls: ['./blog-medium.component.scss']
})
export class BlogMediumComponent implements OnInit, OnDestroy {
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
