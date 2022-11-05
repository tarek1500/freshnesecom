import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
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
	rtl: boolean = false;
	category: Category = {
		id: 0,
		name: '',
		slug: '',
		subcategories: []
	};
	tag: Tag = {
		id: 0,
		name: '',
		slug: ''
	};
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.blogs', text: 'Blogs', link: '' },
	];
	title!: string;
	largeBlogs!: Blog[];
	blogs!: Blog[];
	archives!: string[];
	categories!: Category[];

	constructor(
		private languageService: LanguageService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		let subscription = this.route.data.subscribe(data => {
			let name = data['name'];

			let subscription = this.languageService.languageSubject$.subscribe(language => {
				this.rtl = language.rtl;

				if (name) {
					if (this.category.id !== 0) {
						this.loadCategory(this.category.slug);
					}
					else if (this.tag.id !== 0) {
						this.loadTag(this.tag.slug);
					}
				}
				else {
					this.title = 'translate.components.breadcrumb.blogs';

					this.loadBlogs();
				}

				this.loadData();
			});
			this.subscriptions.push(subscription);

			if (name) {
				subscription = this.route.params.subscribe(params => {
					let slug = params['slug'];

					switch (name) {
						case 'categories.blogs':
							this.loadCategory(slug);

							break;
						case 'tags.blogs':
							this.loadTag(slug);

							break;
					}
				});
				this.subscriptions.push(subscription);
			}
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadCategory(slug: string) {
		if (this.rtl) {
			this.category = {
				id: 1,
				name: 'وجبة عشاء',
				slug: slug,
				subcategories: []
			};
		}
		else {
			this.category = {
				id: 1,
				name: 'Dinner',
				slug: slug,
				subcategories: []
			};
		}

		this.breadcrumb[1].translate = '';
		this.breadcrumb[1].text = this.category.name;
		this.title = this.category.name;

		this.loadBlogs(this.category);
	}

	loadTag(slug: string) {
		if (this.rtl) {
			this.tag = {
				id: 1,
				name: 'وصفات',
				slug: slug
			};
		}
		else {
			this.tag = {
				id: 1,
				name: 'Recipes',
				slug: slug
			};
		}

		this.breadcrumb[1].translate = '';
		this.breadcrumb[1].text = this.tag.name;
		this.title = this.tag.name;

		this.loadBlogs(this.tag);
	}

	loadBlogs(parent?: Category | Tag) {
		if (this.rtl) {
			this.largeBlogs = [
				{
					id: 1,
					title: 'هذه مساحة لعنوان مدونتك، يمكن أن يكون طويل لا تقلق بشأن ذلك',
					slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
					author: {
						id: 1,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'هذه مساحة لعنوان مدونتك، يمكن أن يكون طويل لا تقلق بشأن ذلك',
					slug: 'this-is-a-space-for-your-blog-headline-it-can-be-long-dont-worry-about-that',
					author: {
						id: 2,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 1,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 2,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 3,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 4,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 5,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 6,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 7,
						name: 'الكاتب',
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
							name: 'وسم',
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
					title: 'مساحة لعنوانك هنا، اكتب ما تحتاجه',
					slug: 'space-for-your-heading-is-here-write-what-you-need',
					author: {
						id: 8,
						name: 'الكاتب',
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
							name: 'وسم',
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
		else {
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
		}
	}

	loadData() {
		this.loadArchives();
		this.loadCategories();
	}

	loadArchives() {
		if (this.rtl) {
			this.archives = [
				'مارس 2020',
				'فبراير 2020',
				'يناير 2020',
				'نوفمبر 2019',
				'ديسمبر 2019'
			];
		}
		else {
			this.archives = [
				'March 2020',
				'February 2020',
				'January 2020',
				'November 2019',
				'December 2019'
			];
		}
	}

	loadCategories() {
		if (this.rtl) {
			this.categories = [
				{
					id: 1,
					name: 'الطعام',
					slug: 'food',
					subcategories: []
				},
				{
					id: 2,
					name: 'تخصصات الطهاة',
					slug: 'chefs-specialties',
					subcategories: []
				},
				{
					id: 3,
					name: 'الخضروات',
					slug: 'vegetable',
					subcategories: []
				},
				{
					id: 4,
					name: 'اللحم',
					slug: 'meat',
					subcategories: []
				},
				{
					id: 5,
					name: 'التوصيات',
					slug: 'recommendations',
					subcategories: []
				}
			];
		}
		else {
			this.categories = [
				{
					id: 1,
					name: 'Food',
					slug: 'food',
					subcategories: []
				},
				{
					id: 2,
					name: 'Chefs specialties',
					slug: 'chefs-specialties',
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
	}

	onSubscribed(event: string) { }
}
