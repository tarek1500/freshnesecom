import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Categories', link: '' }
	];
	categories!: Category[];

	constructor() { }

	ngOnInit(): void {
		this.categories = [
			{
				id: 1,
				name: 'Bakery',
				slug: 'bakery',
				subcategories: []
			},
			{
				id: 2,
				name: 'Fruit and vegetables',
				slug: 'fruit-and-vegetables',
				subcategories: []
			},
			{
				id: 3,
				name: 'Fruits',
				slug: 'fruits',
				subcategories: []
			},
			{
				id: 4,
				name: 'Vegetables',
				slug: 'vegetables',
				subcategories: []
			},
			{
				id: 5,
				name: 'Meat and fish',
				slug: 'meat-and-fish',
				subcategories: []
			},
			{
				id: 6,
				name: 'Meat',
				slug: 'meat',
				subcategories: []
			},
			{
				id: 7,
				name: 'Fish',
				slug: 'fish',
				subcategories: []
			},
			{
				id: 8,
				name: 'Drinks',
				slug: 'drinks',
				subcategories: []
			},
			{
				id: 9,
				name: 'Kitchen',
				slug: 'kitchen',
				subcategories: []
			},
			{
				id: 10,
				name: 'Special nutrition',
				slug: 'special-nutrition',
				subcategories: []
			},
			{
				id: 11,
				name: 'Baby',
				slug: 'baby',
				subcategories: []
			},
			{
				id: 12,
				name: 'Pharmacy',
				slug: 'pharmacy',
				subcategories: []
			}
		];
	}
}
