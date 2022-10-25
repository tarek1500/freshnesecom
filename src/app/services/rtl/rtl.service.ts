import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RtlService {
	private _rtlSubject$: BehaviorSubject<boolean>;
	get rtlSubject$(): Observable<boolean> { return this._rtlSubject$.asObservable() };

	private _rtl!: boolean;
	get rtl(): boolean { return this._rtl };

	constructor() {
		let rtl = false;

		this._rtlSubject$ = new BehaviorSubject<boolean>(rtl);
		this.updateValue(rtl);
	}

	updateValue(rtl: boolean) {
		this._rtl = rtl;
		this._rtlSubject$.next(rtl);
	}
}
