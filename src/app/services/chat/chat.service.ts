import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	private _chatSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	get chatSubject$(): Observable<boolean> { return this._chatSubject$.asObservable() };

	private _chat!: boolean;
	get chat(): boolean { return this._chat };

	constructor() {
		this.updateValue(false);
	}

	updateValue(chat: boolean) {
		this._chat = chat;
		this._chatSubject$.next(chat);
	}
}
