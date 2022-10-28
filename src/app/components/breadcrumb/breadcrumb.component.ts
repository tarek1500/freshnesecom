import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, take } from 'rxjs';
import * as _ from 'lodash';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

interface Dictionary {
	[index: string]: any;
}

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

			this.translateService.getTranslation(this.translateService.currentLang).pipe(take(1)).subscribe(translation => {
				translation = this.flattenObject(translation);

				this.breadcrumb.forEach(breadcrumb => {
					breadcrumb.text = translation[breadcrumb.translate];
				});
			});
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	flattenObject(o: any, prefix: string = '', result: Dictionary = {}, keepNull: boolean = true): Dictionary {
		if (_.isString(o) || _.isNumber(o) || _.isBoolean(o) || (keepNull && _.isNull(o))) {
			result[prefix] = o;

			return result;
		}

		if (_.isArray(o) || _.isPlainObject(o)) {
			for (let i in o) {
				let pref = prefix;

				if (_.isArray(o)) {
					pref = pref + `[${i}]`;
				}
				else if (_.isEmpty(prefix)) {
					pref = i;
				}
				else {
					pref = prefix + '.' + i;
				}

				this.flattenObject(o[i], pref, result, keepNull);
			}

			return result;
		}

		return result;
	}
}
