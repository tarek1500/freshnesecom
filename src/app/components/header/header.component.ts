import { Component, OnInit } from '@angular/core';

import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	categories: Category[];
	selectedCategory: Category;
	isCartVisible: boolean = false;

	constructor() {
		this.categories = [
			{
				id: 0,
				name: 'All categories',
				slug: ''
			},
			{
				id: 1,
				name: 'Category 1',
				slug: 'category-1'
			},
			{
				id: 2,
				name: 'Category 2',
				slug: 'category-2'
			},
			{
				id: 3,
				name: 'Category 3',
				slug: 'category-4'
			}
		];

		this.selectedCategory = this.categories[0];
	}

	ngOnInit(): void {
	}

	onCategorySelected(category: Category) {
		this.selectedCategory = category;
	}

	onCartClosed() {
		this.isCartVisible = false;
	}
}
