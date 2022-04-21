import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Blogs', link: '' },
	];
	largeBlogs: Blog[];

	constructor() {
		this.largeBlogs = [
			{
				id: 1,
				title: 'This is a space for your blog headline, it can be long don’t worry about that',
				slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
				tag: 'Tag',
				author: {
					id: 1,
					name: 'Author',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				date: new Date('2020-6-17'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 2,
				title: 'This is a space for your blog headline, it can be long don’t worry about that',
				slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
				tag: 'Tag',
				author: {
					id: 2,
					name: 'Author',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				date: new Date('2020-6-17'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			}
		];
	}

	ngOnInit(): void {
	}

}
