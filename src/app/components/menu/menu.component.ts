import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	isMenuCollapsed: boolean = true;
	categories: Category[];

	constructor() {
		this.categories = [
			{
				id: 1,
				name: 'Bakery',
				slug: 'bakery',
				subcategories: [
					{
						id: 1,
						name: 'Bakery',
						slug: 'bakery',
						subcategories: []
					},
					{
						id: 2,
						name: 'Bakery',
						slug: 'bakery',
						subcategories: []
					}
				]
			},
			{
				id: 2,
				name: 'Fruit and vegetables',
				slug: 'fruit-and-vegetables',
				subcategories: [
					{
						id: 1,
						name: 'Fruit and vegetables',
						slug: 'fruit-and-vegetables',
						subcategories: []
					},
					{
						id: 2,
						name: 'Fruit and vegetables',
						slug: 'fruit-and-vegetables',
						subcategories: []
					}
				]
			},
			{
				id: 3,
				name: 'Meat and fish',
				slug: 'meat-and-fish',
				subcategories: [
					{
						id: 1,
						name: 'Meat and fish',
						slug: 'meat-and-fish',
						subcategories: []
					},
					{
						id: 2,
						name: 'Meat and fish',
						slug: 'meat-and-fish',
						subcategories: []
					}
				]
			},
			{
				id: 4,
				name: 'Drinks',
				slug: 'drinks',
				subcategories: [
					{
						id: 1,
						name: 'Drinks',
						slug: 'drinks',
						subcategories: []
					},
					{
						id: 2,
						name: 'Drinks',
						slug: 'drinks',
						subcategories: []
					}
				]
			},
			{
				id: 5,
				name: 'Kitchen',
				slug: 'kitchen',
				subcategories: [
					{
						id: 1,
						name: 'Kitchen',
						slug: 'kitchen',
						subcategories: []
					},
					{
						id: 2,
						name: 'Kitchen',
						slug: 'kitchen',
						subcategories: []
					}
				]
			},
			{
				id: 6,
				name: 'Special nutrition',
				slug: 'special-nutrition',
				subcategories: [
					{
						id: 1,
						name: 'Special nutrition',
						slug: 'special-nutrition',
						subcategories: []
					},
					{
						id: 2,
						name: 'Special nutrition',
						slug: 'special-nutrition',
						subcategories: []
					}
				]
			},
			{
				id: 7,
				name: 'Baby',
				slug: 'baby',
				subcategories: [
					{
						id: 1,
						name: 'Baby',
						slug: 'baby',
						subcategories: []
					},
					{
						id: 2,
						name: 'Baby',
						slug: 'baby',
						subcategories: []
					}
				]
			},
			{
				id: 8,
				name: 'Pharmacy',
				slug: 'pharmacy',
				subcategories: [
					{
						id: 1,
						name: 'Pharmacy',
						slug: 'pharmacy',
						subcategories: []
					},
					{
						id: 2,
						name: 'Pharmacy',
						slug: 'pharmacy',
						subcategories: []
					}
				]
			}
		];
	}

	ngOnInit(): void {
	}

}
