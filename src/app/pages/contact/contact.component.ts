import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Contact } from '../../interfaces/contact.interface';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.contact', text: 'Contact us', link: '' }
	];
	contact!: Contact;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadContact();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadContact() {
		if (this.rtl) {
			this.contact = {
				latitude: 31.270429,
				longitude: 29.997743,
				contactsInfo: [
					{
						id: 1,
						info: '+420 336 775 664',
						icon: '../../../assets/icons/phone.svg',
						class: 'phone'
					},
					{
						id: 2,
						info: '1234 شارع فريشنس كوم، سان فرانسيسكو، كاليفورنيا، الولايات المتحدة الأمريكية، 12345',
						icon: '../../../assets/icons/location.svg',
						class: 'address'
					},
					{
						id: 3,
						info: 'info@freshnesecom.com',
						icon: '../../../assets/icons/envelope.svg',
						class: 'email'
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
		else {
			this.contact = {
				latitude: 31.270429,
				longitude: 29.997743,
				contactsInfo: [
					{
						id: 1,
						info: '+420 336 775 664',
						icon: '../../../assets/icons/phone.svg',
						class: 'phone'
					},
					{
						id: 2,
						info: '1234 Freshnesecom St, San Francisco, CA 12345',
						icon: '../../../assets/icons/location.svg',
						class: 'address'
					},
					{
						id: 3,
						info: 'info@freshnesecom.com',
						icon: '../../../assets/icons/envelope.svg',
						class: 'email'
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
}
