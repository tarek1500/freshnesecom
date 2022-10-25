import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-large',
	templateUrl: './blog-large.component.html',
	styleUrls: ['./blog-large.component.scss']
})
export class BlogLargeComponent implements OnInit, OnDestroy {
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
