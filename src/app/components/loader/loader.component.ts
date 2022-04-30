import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

	constructor() { }

	ngOnInit(): void {
		document.body.style.overflow = 'hidden';
	}

	ngOnDestroy(): void {
		document.body.style.overflow = 'initial';
	}

}
