import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Banner } from '../../interfaces/banner.interface';
import { Product } from '../../interfaces/product.interface';
import { Quote } from '../../interfaces/quote.interface';
import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	banners: Banner[];
	bestSellingProducts: Product[];
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
	quotes: Quote[];
	sectionProducts: Product[];
	largeBlog: Blog;
	mediumBlog: Blog;
	smallBlogs: Blog[];

	constructor() {
		this.banners = [
			{
				id: 1,
				title: 'Space for heading',
				subtitle: 'Banner subfocus'
			},
			{
				id: 1,
				title: 'Space for heading',
				subtitle: 'Banner subfocus'
			}
		];
		this.bestSellingProducts = [
			{
				id: 1,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 1.48,
				oldPrice: 0,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/112/400/200'
			},
			{
				id: 2,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 0.28,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/1080/400/200'
			},
			{
				id: 3,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 1.12,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/102/600/200'
			}
		];
		this.quotes = [
			{
				id: 1,
				author: {
					id: 1,
					name: 'Name and Surname',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				content: '“ This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here “'
			},
			{
				id: 2,
				author: {
					id: 2,
					name: 'Name and Surname',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				content: '“ This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here “'
			},
			{
				id: 3,
				author: {
					id: 3,
					name: 'Name and Surname',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				content: '“ This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here “'
			},
			{
				id: 4,
				author: {
					id: 4,
					name: 'Name and Surname',
					role: '',
					image: 'https://picsum.photos/id/237/40/40'
				},
				content: '“ This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here “'
			}
		];
		this.sectionProducts = [
			{
				id: 1,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 3.26,
				oldPrice: 0,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/112/400/200'
			},
			{
				id: 2,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 1.48,
				oldPrice: 0,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/1080/400/200'
			},
			{
				id: 3,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 0.28,
				oldPrice: 48.56,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/102/600/200'
			},
			{
				id: 4,
				name: 'Product Title',
				slug: 'product-title',
				description: 'Space for a small product description',
				rating: 4.33,
				price: 1.12,
				oldPrice: 0,
				currency: 'USD',
				freshness: '',
				freshnessDescription: '',
				farm: '',
				delivery: '',
				quantity: 0,
				shipping: '',
				deliveryDays: 0,
				image: 'https://picsum.photos/id/107/400/200'
			}
		];
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
		this.smallBlogs = [
			{
				id: 3,
				title: 'Salad is kinda good start to your morning routines',
				slug: 'salad-is-kinda-good-start-to-your-morning-routines',
				tag: '',
				author: {
					id: 3,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-1-14'),
				image: 'https://picsum.photos/seed/picsum/300/300'
			},
			{
				id: 4,
				title: 'Salad is kinda good start to your morning routines',
				slug: 'salad-is-kinda-good-start-to-your-morning-routines',
				tag: '',
				author: {
					id: 4,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-1-14'),
				image: 'https://picsum.photos/seed/picsum/300/300'
			},
			{
				id: 5,
				title: 'Salad is kinda good start to your morning routines',
				slug: 'salad-is-kinda-good-start-to-your-morning-routines',
				tag: '',
				author: {
					id: 5,
					name: 'Author',
					role: '',
					image: ''
				},
				date: new Date('2020-1-14'),
				image: 'https://picsum.photos/seed/picsum/300/300'
			}
		];
	}

	ngOnInit(): void {
	}

}
