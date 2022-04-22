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
		{ text: '', link: '' },
	];
	blog!: Blog;
	comments: Comment[] = [];
	relatedBlogs: Blog[];

	constructor() {
		this.blog = {
			id: 1,
			title: 'Space for your heading, can be larger so don’t worry - large heading looks better',
			slug: 'space-for-your-heading-can-be-larger-so-dont-worry-large-heading-looks-better',
			author: {
				id: 1,
				name: 'Admin',
				role: '',
				image: ''
			},
			category: {
				id: 1,
				name: 'Dinner',
				slug: 'dinner',
				subcategories: []
			},
			tags: [
				{
					id: 1,
					name: 'Food',
					slug: 'food'
				},
				{
					id: 2,
					name: 'Recipes',
					slug: 'recipes'
				},
				{
					id: 3,
					name: 'Fresh',
					slug: 'fresh'
				},
				{
					id: 4,
					name: 'Vegetable',
					slug: 'vegetable'
				}
			],
			content: '<div class="section"><p class="paragraph">There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re just craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine!</p></div><div class="section"><h3 class="heading">Morning Ritual // 9:00 AM</h3><p class="paragraph">Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.</p></div><div class="section"><h3 class="heading">Mid-day Boost // 2:00 PM</h3><p class="paragraph">If you’re feeling a little sluggish post-lunch, beat the afternoon slump with some lemon ginger green tea. Green tea can be a great alternative to coffee in the afternoon when you want that little boost of energy. An added benefit: lemon and ginger work together to aid digestion which is especially helpful after lunch.</p><p class="paragraph">If you’re not into hot drinks, opt-in for a fruity iced green tea instead. Steep some honeydew or peach green tea in hot water for a few minutes and then pour over ice until it’s nice and cool. Enjoy with a slice of lemon, and you’ll feel refreshed and ready to tackle any task.</p></div><div class="section"><h3 class="heading">Evening Calm // 8:00 PM</h3><p class="paragraph">Slip on some fuzzy socks, light your favorite candles, and fire up the kettle—it’s time to wind down after a long day. Grab yourself a soothing cup of lavender chamomile tea and indulge in some well-deserved self-love.</p></div>',
			date: new Date('2020-6-22'),
			comments: [
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
			],
			image: 'https://picsum.photos/seed/picsum/1800/1800'
		}
		this.relatedBlogs = [
			{
				id: 1,
				title: 'Space for your heading is here, write what you need',
				slug: 'space-for-your-heading-is-here-write-what-you-need',
				author: {
					id: 1,
					name: 'Author',
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
	}

	ngOnInit(): void {
		// Fetch blog for server
		this.breadcrumb[2].text = this.blog.title;
	}

}
