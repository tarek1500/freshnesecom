import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.profile', text: 'Profile', link: '' }
	];
	url!: string;
	active: string = 'info';

	constructor(
		private rtlService: RtlService,
		private router: Router
	) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);

		subscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
			this.url = (event as NavigationEnd).url;
		});
		this.subscriptions.push(subscription);

		this.url = this.router.url;
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
