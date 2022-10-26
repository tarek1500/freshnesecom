import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'Recipes', link: '' }
	];
	recipes!: Recipe[];

	constructor() { }

	ngOnInit(): void {
		this.recipes = [
			{
				id: 1,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 2,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 3,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 4,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 5,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 6,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 7,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 8,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			},
			{
				id: 9,
				title: 'Greek milk pie – Galatopita',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [],
				executionGroups: [],
				date: new Date('2020-6-17'),
				comments: [],
				video: ''
			}
		];
	}
}
