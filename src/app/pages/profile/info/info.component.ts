import { Component, OnInit } from '@angular/core';

import { User } from '../../../interfaces/user.interface';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
	user!: User;

	constructor() { }

	ngOnInit(): void {
		// Fetch user from server
		this.user = {
			id: 1,
			name: 'Author',
			email: 'author@domain.com',
			phone: '+420336775664',
			role: '',
			image: 'https://picsum.photos/id/237/150/150'
		};
	}

}
