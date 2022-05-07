import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../interfaces/message.interface';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
	chatSubscription!: Subscription;
	isChatVisible: boolean = false;
	messages!: Message[];

	constructor(private chatService: ChatService) { }

	ngOnInit(): void {
		this.messages = [
			{
				id: 1,
				author: {
					id: 1,
					name: 'Admin',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2022-4-28'),
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 1,
				author: {
					id: 2,
					name: 'User',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2022-4-29'),
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 3,
				author: {
					id: 1,
					name: 'Admin',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2022-4-30'),
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 4,
				author: {
					id: 2,
					name: 'User',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2022-5-1'),
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
			},
			{
				id: 5,
				author: {
					id: 1,
					name: 'Admin',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2022-5-2'),
				content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
			}
		];
		this.chatSubscription = this.chatService.chatSubject$.subscribe(chat => {
			this.isChatVisible = chat;
		});
	}

	ngOnDestroy(): void {
		this.chatSubscription.unsubscribe();
	}

	onSent(event: string) { }

}
