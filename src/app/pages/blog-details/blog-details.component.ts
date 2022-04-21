import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Comment } from '../../interfaces/comment.interface';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-details',
	templateUrl: './blog-details.component.html',
	styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Blogs', link: '/blogs' },
		{ text: 'Blog title', link: '' },
	]
	comments: Comment[];
	relatedBlogs: Blog[]

	constructor() {
		this.comments = [
			{
				id: 1,
				author: {
					id: 1,
					name: 'Author',
					role: 'Admin',
					image: 'https://picsum.photos/id/237/40/40'
				},
				date: new Date('2020-6-22 18:46:10'),
				content: 'Hi everyone, we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.',
				replies: [
					{
						id: 1,
						author: {
							id: 2,
							name: 'User',
							role: 'Customer',
							image: 'https://picsum.photos/id/237/40/40'
						},
						date: new Date('2020-6-22'),
						content: 'Don’t worry about that, we are happy to read a new stories. The time we had to wait was crazy, but the results are awesome! You did an epic job. Now I just need to a buy one.',
						replies: []
					}
				]
			}
		];
		this.relatedBlogs = [
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
			}
		];
	}

	ngOnInit(): void {
	}

}
