import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	private _loaderSubject$: BehaviorSubject<boolean>;
	get loaderSubject$(): Observable<boolean> { return this._loaderSubject$.asObservable() };

	private _loader!: boolean;
	get loader(): boolean { return this._loader };

	constructor() {
		let loader = false;

		this._loaderSubject$ = new BehaviorSubject<boolean>(loader);
		this.updateValue(loader);
	}

	updateValue(loader: boolean) {
		this._loader = loader;
		this._loaderSubject$.next(loader);
	}
}
