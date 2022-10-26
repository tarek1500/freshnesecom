import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, AfterViewInit {
	@ViewChild('ingredientsAccordion') ingredientsAccordion!: NgbAccordion;
	@ViewChild('executionAccordion') executionAccordion!: NgbAccordion;
	breadcrumb: Breadcrumb[] = [
		{ translate: '', text: 'Home', link: '/' },
		{ translate: '', text: 'Recipes', link: '/recipes' },
		{ translate: '', text: '', link: '' },
	];
	recipe!: Recipe;

	constructor() { }

	ngOnInit(): void {
		// Fetch recipe form server
		this.recipe = {
			id: 1,
			title: 'Greek milk pie – Galatopita',
			slug: 'greek-milk-pie-galatopita',
			ingredientGroups: [
				{
					id: 1,
					title: '',
					ingredients: [
						{
							id: 1,
							quantity: '1.120 g',
							ingredient: 'milk'
						},
						{
							id: 2,
							quantity: '200 g',
							ingredient: 'granulated sugar'
						},
						{
							id: 3,
							quantity: '90 g',
							ingredient: 'semolina, fine'
						},
						{
							id: 4,
							quantity: '30 g',
							ingredient: 'corn starch'
						},
						{
							id: 5,
							quantity: '3',
							ingredient: 'eggs, medium'
						},
						{
							id: 6,
							quantity: '1 teaspoon',
							ingredient: 'vanilla extract'
						},
						{
							id: 7,
							quantity: '',
							ingredient: 'lemon zest, of 1 lemon'
						},
						{
							id: 8,
							quantity: '1 pinch',
							ingredient: 'salt'
						},
						{
							id: 9,
							quantity: '90 g',
							ingredient: 'butter'
						}
					]
				},
				{
					id: 1,
					title: 'For the coating',
					ingredients: [
						{
							id: 10,
							quantity: '2 tablespoons',
							ingredient: 'water'
						},
						{
							id: 11,
							quantity: '1',
							ingredient: 'egg, medium'
						},
						{
							id: 12,
							quantity: '2 tablespoons',
							ingredient: 'granulated sugar'
						}
					]
				},
				{
					id: 1,
					title: 'To serve',
					ingredients: [
						{
							id: 13,
							quantity: '2 tablespoons',
							ingredient: 'granulated sugar'
						},
						{
							id: 14,
							quantity: '1 tablespoon',
							ingredient: 'honey'
						},
						{
							id: 15,
							quantity: '1 tablespoon',
							ingredient: 'cinnamon'
						},
						{
							id: 16,
							quantity: '',
							ingredient: 'mint leaves'
						}
					]
				}
			],
			executionGroups: [
				{
					id: 1,
					title: 'General',
					executions: [
						{
							id: 1,
							execution: 'Preheat the oven to 180ο C (356ο F) set to fan.'
						},
						{
							id: 2,
							execution: 'In a pot, add the milk, the sugar, and transfer over medium heat until it comes to a boil.'
						},
						{
							id: 3,
							execution: 'In a bowl, add the semolina, the cornstarch, and mix. Add the eggs, vanilla extract, lemon zest, salt, and mix very well with a hand whisk.'
						},
						{
							id: 4,
							execution: 'With a ladle, slowly add the hot milk from the pot into the bowl with the eggs, by constantly stirring.'
						},
						{
							id: 5,
							execution: 'Add the mixture into the pot again, transfer on heat, and stir constantly until the cream thickens.'
						},
						{
							id: 6,
							execution: 'Remove from the heat, add the butter, and mix until it melts.'
						},
						{
							id: 7,
							execution: 'Butter a 27 cm baking dish and sprinkle with semolina. Pour the whole mixture and spread it well with a spatula.'
						}
					]
				},
				{
					id: 2,
					title: 'For the coating',
					executions: [
						{
							id: 8,
							execution: 'In a bowl, add the water, egg, sugar, and mix well.'
						},
						{
							id: 9,
							execution: 'With a pastry brush, spread it over the whole surface of the milk pie and bake for 40-45 minutes.'
						},
						{
							id: 10,
							execution: 'Remove from the heat and allow at least 4 hours for it to cool well.'
						},
						{
							id: 11,
							execution: 'Serve with sugar, honey, cinnamon, and mint.'
						}
					]
				}
			],
			date: new Date('2020-6-17'),
			comments: [
				{
					id: 1,
					author: {
						id: 1,
						name: 'Author',
						email: '',
						phone: '',
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
								email: '',
								phone: '',
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
			video: 'https://www.youtube.com/embed/KedPMjRSTYM'
		};
		this.breadcrumb[2].text = this.recipe.title;
	}

	ngAfterViewInit() {
		this.ingredientsAccordion.expandAll();
		this.executionAccordion.expandAll();
	}

	onExecutionClicked(event: MouseEvent) {
		let targetExecution = event.target as HTMLInputElement;
		let accordionBody = targetExecution.parentNode?.parentNode as HTMLDivElement;

		for (let i = 0; i < accordionBody.childNodes.length; i++) {
			let formCheck = accordionBody.childNodes[i] as HTMLDivElement;

			if (formCheck instanceof HTMLDivElement) {
				let input = formCheck.querySelector('input') as HTMLInputElement;
				let id = input.id.substring(10);

				if (+targetExecution.id.substring(10) > +id) {
					input.checked = true;
				}
				else if (+targetExecution.id.substring(10) < +id) {
					input.checked = false;
				}
			}
		}
	}
}
