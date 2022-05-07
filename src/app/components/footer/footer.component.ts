import { Component, Input, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat/chat.service';
import { Tag } from '../../interfaces/tag.interface';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input('show-links') showLinks: boolean = true;
	@Input('show-tags') showTags: boolean = true;

	tags: Tag[];
	year: number;

	constructor(private chatService: ChatService) {
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
		this.year = new Date().getFullYear();
	}

	ngOnInit(): void {
	}

	openChatWindow(event: MouseEvent) {
		this.chatService.updateValue(true);
	}

}
