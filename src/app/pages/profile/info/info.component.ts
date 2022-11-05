import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../../services/language/language.service';
import { User } from '../../../interfaces/user.interface';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	user: User = {
		id: 0,
		name: '',
		email: '',
		phone: '',
		role: '',
		image: ''
	};

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadInfo();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadInfo() {
		if (this.rtl) {
			this.user = {
				id: 1,
				name: 'الكاتب',
				email: 'author@domain.com',
				phone: '+420336775664',
				role: '',
				image: 'https://picsum.photos/id/237/150/150'
			};
		}
		else {
			this.user = {
				id: 1,
				name: 'Author',
				email: 'author@domain.com',
				phone: '+420336775664',
				role: '',
				image: 'https://picsum.photos/id/237/150/150'
			};
		}
	}
}
