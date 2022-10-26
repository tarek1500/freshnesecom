import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { About } from '../../interfaces/about.interface';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'About Us', link: '' }
	];
	about!: About;
	quotesOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 1200,
		navText: ['', ''],
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			541: {
				items: 2
			},
			1140: {
				items: 3
			}
		},
		nav: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 1000,
		autoplayHoverPause: false
	};

	constructor() { }

	ngOnInit(): void {
		this.about = {
			title: 'San Francisco, CA',
			subtitle: 'History',
			year: '1903',
			intro: 'Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia ge Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ips',
			images: ['https://picsum.photos/id/1015/1500/1000', 'https://picsum.photos/id/1016/1500/1000', 'https://picsum.photos/id/1028/1500/1000', 'https://picsum.photos/id/1039/1500/1000'],
			services: [
				{
					id: 1,
					title: 'Shipping',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 2,
					title: 'Quality',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 3,
					title: 'Availability',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 4,
					title: 'Products',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 5,
					title: 'Farms',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 6,
					title: 'Lorem ipsum',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 7,
					title: 'Lorem ipsum',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				},
				{
					id: 8,
					title: 'Lorem ipsum',
					description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit reiciendis possimus culpa nesciunt.'
				}
			],
			statistics: {
				title: 'We serve',
				description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
				image: 'https://picsum.photos/id/1026/3000/2000',
				statistics: [
					{
						id: 1,
						name: 'Countries',
						count: 25
					},
					{
						id: 2,
						name: 'Clients',
						count: 10000
					},
					{
						id: 3,
						name: 'Products',
						count: 50000
					}
				]
			},
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
			]
		};
	}
}
