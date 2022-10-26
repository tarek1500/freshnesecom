import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, take } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
	@Input() breadcrumb: Breadcrumb[] = [];
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(
		private translateService: TranslateService,
		private rtlService: RtlService
	) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.breadcrumb.forEach(breadcrumb => {
				this.translateService.get(breadcrumb.translate).pipe(take(1)).subscribe(translate => {
					breadcrumb.text = translate;
				});
			});
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
