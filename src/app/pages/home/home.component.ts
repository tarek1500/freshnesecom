import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	quotesOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 1200,
		navText: ['', ''],
		margin: 32,
		responsive: {
			0: {
				items: 1
			},
			510: {
				items: 2
			},
			958: {
				items: 3
			}
		},
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1200,
		autoplayHoverPause: false
	}
	largeBlog: Blog;
	mediumBlog: Blog;

	constructor() {
		this.largeBlog = {
			id: 1,
			title: 'Our chef tips for a great and tasty dinner ready in 20 minutes',
			slug: 'our-chef-tips-for-a-great-and-tasty-dinner-ready-in-20-minutes',
			tag: 'Dinner tips',
			author: {
				id: 1,
				name: 'Author',
				role: '',
				image: 'https://picsum.photos/id/237/32/32'
			},
			date: new Date('2020-6-17'),
			image: 'https://picsum.photos/seed/picsum/650/650'
		};

		this.mediumBlog = {
			id: 2,
			title: 'Which vegetable your family will love and want’s eat each day',
			slug: 'which-vegetable-your-family-will-love-and-wants-eat-each-day',
			tag: 'Vegetable',
			author: {
				id: 2,
				name: 'Author',
				role: '',
				image: ''
			},
			date: new Date('2020-6-15'),
			image: 'https://picsum.photos/seed/picsum/650/650'
		};
	}

	ngOnInit(): void {
	}

}
