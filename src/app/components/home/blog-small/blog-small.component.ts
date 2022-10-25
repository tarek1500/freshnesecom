import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../../services/rtl/rtl.service';
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

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
