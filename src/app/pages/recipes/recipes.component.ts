import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.recipes', text: 'Recipes', link: '' }
	];
	recipes!: Recipe[];

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;

			this.loadRecipes();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadRecipes() {
		if (this.rtl) {
			this.recipes = [
				{
					id: 1,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 2,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 3,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 4,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 5,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 6,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 7,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 8,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				},
				{
					id: 9,
					title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
					slug: 'greek-milk-pie-galatopita',
					ingredientGroups: [],
					executionGroups: [],
					date: new Date('2020-6-17'),
					comments: [],
					video: ''
				}
			];
		}
		else {
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
}
