import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'Profile', link: '' }
	];
	url!: string;
	active: string = 'info';

	constructor(private router: Router) { }

	ngOnInit(): void {
		let subscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
			this.url = (event as NavigationEnd).url;
		});
		this.subscriptions.push(subscription);

		this.url = this.router.url;
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
