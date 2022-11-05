import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {
	private _languageSubject$: BehaviorSubject<LanguageSubject>;
	get languageSubject$(): Observable<LanguageSubject> { return this._languageSubject$.asObservable() };

	private _language!: string;
	get language(): string { return this._language };

	private _rtl!: boolean;
	get rtl(): boolean { return this._rtl };

	constructor() {
		let language = 'en';
		let rtl = false;

		this._languageSubject$ = new BehaviorSubject<LanguageSubject>({
			language, rtl
		});
		this.updateValue(language, rtl);
	}

	updateValue(language: string, rtl: boolean) {
		this._language = language;
		this._rtl = rtl;
		this._languageSubject$.next({
			rtl, language
		});
	}
}

interface LanguageSubject {
	language: string,
	rtl: boolean
}
