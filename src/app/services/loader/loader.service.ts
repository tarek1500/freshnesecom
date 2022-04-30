import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	private _loaderSubject$: BehaviorSubject<boolean>;
	get loaderSubject$(): BehaviorSubject<boolean> { return this._loaderSubject$; };

	constructor() {
		this._loaderSubject$ = new BehaviorSubject<boolean>(false);
	}
}
