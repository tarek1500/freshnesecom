import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { ChatService } from '../../services/chat/chat.service';
import { Tag } from '../../interfaces/tag.interface';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
	@Input('show-links') showLinks: boolean = true;
	@Input('show-tags') showTags: boolean = true;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	tags!: Tag[];
	year: number = new Date().getFullYear();

	constructor(
		private rtlService: RtlService,
		private chatService: ChatService
	) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadTags();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadTags() {
		if (this.rtl) {
			this.tags = [
				{
					id: 1,
					name: 'فول',
					slug: 'beans'
				},
				{
					id: 2,
					name: 'جزر',
					slug: 'carrots'
				},
				{
					id: 3,
					name: 'تفاح',
					slug: 'apples'
				},
				{
					id: 4,
					name: 'ثوم',
					slug: 'garlic'
				},
				{
					id: 5,
					name: 'فطر',
					slug: 'mushrooms'
				},
				{
					id: 6,
					name: 'طماطم',
					slug: 'tomatoes'
				},
				{
					id: 7,
					name: 'فلفل حار',
					slug: 'chilli-peppers'
				},
				{
					id: 8,
					name: 'بروكلي',
					slug: 'broccoli'
				},
				{
					id: 9,
					name: 'بطيخ',
					slug: 'watermelons'
				},
				{
					id: 10,
					name: 'برتقال',
					slug: 'oranges'
				},
				{
					id: 11,
					name: 'موز',
					slug: 'bananas'
				},
				{
					id: 12,
					name: 'عنب',
					slug: 'grapes'
				},
				{
					id: 13,
					name: 'كرز',
					slug: 'cherries'
				},
				{
					id: 14,
					name: 'لحمة',
					slug: 'meat'
				},
				{
					id: 15,
					name: 'سمك',
					slug: 'fish'
				},
				{
					id: 16,
					name: 'طعام طازج',
					slug: 'fresh-food'
				},
				{
					id: 17,
					name: 'ليمون',
					slug: 'lemons'
				}
			];
		}
		else {
			this.tags = [
				{
					id: 1,
					name: 'Beans',
					slug: 'beans'
				},
				{
					id: 2,
					name: 'Carrots',
					slug: 'carrots'
				},
				{
					id: 3,
					name: 'Apples',
					slug: 'apples'
				},
				{
					id: 4,
					name: 'Garlic',
					slug: 'garlic'
				},
				{
					id: 5,
					name: 'Mushrooms',
					slug: 'mushrooms'
				},
				{
					id: 6,
					name: 'Tomatoes',
					slug: 'tomatoes'
				},
				{
					id: 7,
					name: 'Chilli peppers',
					slug: 'chilli-peppers'
				},
				{
					id: 8,
					name: 'Broccoli',
					slug: 'broccoli'
				},
				{
					id: 9,
					name: 'Watermelons',
					slug: 'watermelons'
				},
				{
					id: 10,
					name: 'Oranges',
					slug: 'oranges'
				},
				{
					id: 11,
					name: 'Bananas',
					slug: 'bananas'
				},
				{
					id: 12,
					name: 'Grapes',
					slug: 'grapes'
				},
				{
					id: 13,
					name: 'Cherries',
					slug: 'cherries'
				},
				{
					id: 14,
					name: 'Meat',
					slug: 'meat'
				},
				{
					id: 15,
					name: 'Seo tag',
					slug: 'seo-tag'
				},
				{
					id: 16,
					name: 'Fish',
					slug: 'fish'
				},
				{
					id: 17,
					name: 'Seo tag',
					slug: 'seo-tag'
				},
				{
					id: 18,
					name: 'Fresh food',
					slug: 'fresh-food'
				},
				{
					id: 19,
					name: 'Lemons',
					slug: 'lemons'
				}
			];
		}
	}

	openChatWindow(event: MouseEvent) {
		this.chatService.updateValue(true);
	}
}
