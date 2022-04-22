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
	blogs: Blog[];

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
		this.blogs = [
			{
				id: 1,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 1,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 2,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 2,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 3,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 3,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 4,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 4,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 5,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 5,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 6,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 6,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 7,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 7,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 8,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				tag: 'Tag',
				author: {
					id: 8,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-6-15'),
				image: 'https://picsum.photos/seed/picsum/650/650'
			}
		]
	}

	ngOnInit(): void {
	}

}
