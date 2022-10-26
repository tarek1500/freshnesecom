import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'Login', link: '' }
	];

	constructor() { }

	ngOnInit(): void { }
}
