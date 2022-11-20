import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../interfaces/message.interface';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild(NgScrollbar) scrollbar!: NgScrollbar;
	@ViewChild('content') content!: ElementRef<HTMLDivElement>;
	@ViewChildren('messagesList') messagesList!: QueryList<HTMLDivElement>;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	reachedBottomOffset: number = 40;
	isReachedBottom: boolean = false;
	isChatVisible: boolean = false;
	isTyping: boolean = true;
	messages!: Message[];

	constructor(
		private languageService: LanguageService,
		private chatService: ChatService
	) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadMessages();
		});
		this.subscriptions.push(subscription);

		subscription = this.chatService.chatSubject$.subscribe(chat => {
			this.isChatVisible = chat;
		});
		this.subscriptions.push(subscription);
	}

	ngAfterViewInit() {
		let subscription = this.scrollbar.scrolled.subscribe(event => {
			let scrollViewport = event.target as HTMLDivElement;

			if (scrollViewport.scrollHeight - scrollViewport.scrollTop >= this.content.nativeElement.offsetHeight + this.reachedBottomOffset) {
				this.isReachedBottom = false;
			}
			else {
				this.isReachedBottom = true;
			}
		});
		this.subscriptions.push(subscription);

		subscription = this.messagesList.changes.subscribe(event => {
			if (this.isReachedBottom) {
				this.scrollbar.scrollTo({ bottom: 0 });
			}
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadMessages() {
		if (this.rtl) {
			this.messages = [
				{
					id: 1,
					author: {
						id: 1,
						name: 'المشرف',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-4-28'),
					content: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت.'
				},
				{
					id: 2,
					author: {
						id: 2,
						name: 'المستخدم',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-4-29'),
					content: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت.'
				},
				{
					id: 3,
					author: {
						id: 1,
						name: 'المشرف',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-4-30'),
					content: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت.'
				},
				{
					id: 4,
					author: {
						id: 2,
						name: 'المستخدم',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-5-1'),
					content: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت.'
				},
				{
					id: 5,
					author: {
						id: 1,
						name: 'المشرف',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-5-2'),
					content: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت.'
				}
			];
		}
		else {
			this.messages = [
				{
					id: 1,
					author: {
						id: 1,
						name: 'Admin',
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-4-28'),
					content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
				},
				{
					id: 2,
					author: {
						id: 2,
						name: 'User',
						email: '',
						phone: '',
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
						email: '',
						phone: '',
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
						email: '',
						phone: '',
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
						email: '',
						phone: '',
						role: '',
						image: 'https://picsum.photos/id/237/40/40'
					},
					date: new Date('2022-5-2'),
					content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
				}
			];
		}
	}

	onSent(event: string) { }
}
