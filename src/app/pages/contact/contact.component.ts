import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Contact } from '../../interfaces/contact.interface';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Contact Us', link: '' }
	];
	contact!: Contact;

	constructor() { }

	ngOnInit(): void {
		this.contact = {
			latitude: 31.270429,
			longitude: 29.997743,
			contactsInfo: [
				{
					id: 1,
					info: '+420 336 775 664',
					icon: '../../../assets/icons/phone.svg'
				},
				{
					id: 2,
					info: '1234 Freshnesecom St, San Francisco, CA 12345',
					icon: '../../../assets/icons/location.svg'
				},
				{
					id: 3,
					info: 'info@freshnesecom.com',
					icon: '../../../assets/icons/envelope.svg'
				}
			],
			socials: [
				{
					id: 1,
					name: '',
					link: '#',
					icon: '../../../assets/icons/facebook.svg'
				},
				{
					id: 2,
					name: '',
					link: '#',
					icon: '../../../assets/icons/pinterest.svg'
				},
				{
					id: 3,
					name: '',
					link: '#',
					icon: '../../../assets/icons/twitter.svg'
				},
				{
					id: 4,
					name: '',
					link: '#',
					icon: '../../../assets/icons/linkedin.svg'
				}
			]
		};
	}

}
