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
	routerSubscription!: Subscription;
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Profile', link: '' }
	];
	url!: string;
	active: string = 'info';

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.url = this.router.url;
		this.routerSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
			this.url = (event as NavigationEnd).url;
		});
	}

	ngOnDestroy(): void {
		this.routerSubscription.unsubscribe();
	}
}
