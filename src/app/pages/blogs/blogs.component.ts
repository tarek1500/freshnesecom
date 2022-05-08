import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Blog } from '../../interfaces/blog.interface';
import { Category } from '../../interfaces/category.interface';
import { Tag } from '../../interfaces/tag.interface';

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	category!: Category;
	tag!: Tag;
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: '', link: '' },
	];
	largeBlogs: Blog[];
	blogs: Blog[];
	categories: Category[]

	constructor(private route: ActivatedRoute) {
		this.largeBlogs = [
			{
				id: 1,
				title: 'This is a space for your blog headline, it can be long don’t worry about that',
				slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
				author: {
					id: 1,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-17'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 2,
				title: 'This is a space for your blog headline, it can be long don’t worry about that',
				slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
				author: {
					id: 2,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: 'https://picsum.photos/id/237/32/32'
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-17'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			}
		];
		this.blogs = [
			{
				id: 1,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 1,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 2,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 2,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 3,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 3,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 4,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 4,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 5,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 5,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 6,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 6,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 7,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 7,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			},
			{
				id: 8,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 8,
					name: 'Author',
					email: '',
					phone: '',
					role: '',
					image: ''
				},
				category: {
					id: 0,
					name: '',
					slug: '',
					subcategories: []
				},
				tags: [
					{
						id: 1,
						name: 'Tag',
						slug: 'tag'
					}
				],
				content: '',
				date: new Date('2020-6-15'),
				comments: [],
				image: 'https://picsum.photos/seed/picsum/650/650'
			}
		];
		this.categories = [
			{
				id: 1,
				name: 'Food',
				slug: 'food',
				subcategories: []
			},
			{
				id: 2,
				name: 'Chefs specialities',
				slug: 'chefs-specialities',
				subcategories: []
			},
			{
				id: 3,
				name: 'Vegetable',
				slug: 'vegetable',
				subcategories: []
			},
			{
				id: 4,
				name: 'Meat',
				slug: 'meat',
				subcategories: []
			},
			{
				id: 5,
				name: 'Recommendations',
				slug: 'recommendations',
				subcategories: []
			}
		];
	}

	ngOnInit(): void {
		let subscription = this.route.data.subscribe(data => {
			let name = data['name'];

			if (name) {
				let subscription = this.route.params.subscribe(params => {
					let slug: string = params['slug'];

					switch (name) {
					case 'categories.blogs':
						// Fetch category and its blogs from server
						this.category = {
							id: 0,
							name: 'Dinner',
							slug: slug,
							subcategories: []
						};
						this.breadcrumb[1].text = this.category.name;

						break;
					case 'tags.blogs':
						// Fetch tag and its blogs from server
						this.tag = {
							id: 0,
							name: 'Recipes',
							slug: slug
						};
						this.breadcrumb[1].text = this.tag.name;

						break;
					}
				});

				this.subscriptions.push(subscription);
			}
			else {
				this.breadcrumb[1].text = 'Blogs';
			}
		});

		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	onSubscribed(event: string) { }

}
