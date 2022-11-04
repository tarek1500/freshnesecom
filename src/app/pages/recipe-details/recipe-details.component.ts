import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
	selector: 'app-recipe-details',
	templateUrl: './recipe-details.component.html',
	styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('ingredientsAccordion') ingredientsAccordion!: NgbAccordion;
	@ViewChild('executionAccordion') executionAccordion!: NgbAccordion;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.recipes', text: 'Recipes', link: '/recipes' },
		{ translate: '', text: '', link: '' },
	];
	recipe!: Recipe;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadRecipe();
		});
		this.subscriptions.push(subscription);
	}

	ngAfterViewInit() {
		this.ingredientsAccordion.expandAll();
		this.executionAccordion.expandAll();
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadRecipe() {
		if (this.rtl) {
			this.recipe = {
				id: 1,
				title: 'فطيرة الحليب اليونانية - جالاتوبيتا',
				slug: 'greek-milk-pie-galatopita',
				ingredientGroups: [
					{
						id: 1,
						title: '',
						ingredients: [
							{
								id: 1,
								quantity: '1.120 جرام',
								ingredient: 'لبن'
							},
							{
								id: 2,
								quantity: '200 جرام',
								ingredient: 'سكر محبب'
							},
							{
								id: 3,
								quantity: '90 جرام',
								ingredient: 'سميد، ناعم'
							},
							{
								id: 4,
								quantity: '30 جرام',
								ingredient: 'نشا الذرة'
							},
							{
								id: 5,
								quantity: '3',
								ingredient: 'بيض، متوسط'
							},
							{
								id: 6,
								quantity: '1 ملعقة صغيرة',
								ingredient: 'خلاصة الفانيليا'
							},
							{
								id: 7,
								quantity: '',
								ingredient: 'قشر الليمون، 1 ليمونة'
							},
							{
								id: 8,
								quantity: '1 رشة',
								ingredient: 'ملح'
							},
							{
								id: 9,
								quantity: '90 جرام',
								ingredient: 'زبدة'
							}
						]
					},
					{
						id: 2,
						title: 'للطبقة الخارجية',
						ingredients: [
							{
								id: 10,
								quantity: '2 ملعقة طعام',
								ingredient: 'ماء'
							},
							{
								id: 11,
								quantity: '1',
								ingredient: 'بيضة، متوسطة'
							},
							{
								id: 12,
								quantity: '2 ملعقة طعام',
								ingredient: 'سكر محبب'
							}
						]
					},
					{
						id: 3,
						title: 'للتقديم',
						ingredients: [
							{
								id: 13,
								quantity: '2 ملعقة طعام',
								ingredient: 'سكر محبب'
							},
							{
								id: 14,
								quantity: '1 ملعقة طعام',
								ingredient: 'عسل'
							},
							{
								id: 15,
								quantity: '1 ملعقة طعام',
								ingredient: 'قرفة'
							},
							{
								id: 16,
								quantity: '',
								ingredient: 'أوراق النعناع'
							}
						]
					}
				],
				executionGroups: [
					{
						id: 1,
						title: 'فكرة عامة',
						executions: [
							{
								id: 1,
								execution: 'سخن الفرن إلى 180 درجة مئوية (356 درجة فهرنهايت) و تشغيل المروحة.'
							},
							{
								id: 2,
								execution: 'في قدر، نضيف الحليب والسكر وننقله على نار متوسطة حتى يغلي.'
							},
							{
								id: 3,
								execution: 'في وعاء، أضيف السميد ونشا الذرة واخلطهم. أضيف البيض وخلاصة الفانيليا وقشر الليمون والملح واخلطهم جيدًا بمضرب يدوي.'
							},
							{
								id: 4,
								execution: 'باستخدام مغرفة، أضيف الحليب الساخن ببطء من القدر إلى وعاء البيض مع التحريك المستمر.'
							},
							{
								id: 5,
								execution: 'يُضاف المزيج إلى القدر مرة أخرى، ويُنقل على النار ويُحرّك باستمرار حتى تتكاثف الكريمة.'
							},
							{
								id: 6,
								execution: 'نرفع عن النار ونضيف الزبدة ونخلط حتى تذوب.'
							},
							{
								id: 7,
								execution: 'قم بدهن صينية خبز 27 سم و قم برشّها بالسميد. اسكب المزيج بالكامل و قم بتوزّيعه جيدًا باستخدام ملعقة.'
							}
						]
					},
					{
						id: 2,
						title: 'للطبقة الخارجية',
						executions: [
							{
								id: 8,
								execution: 'في وعاء ، أضيف الماء والبيض والسكر واخلطهم جيدًا.'
							},
							{
								id: 9,
								execution: 'باستخدام فرشاة المعجنات ، وزعها على سطح فطيرة الحليب بالكامل واخبزها لمدة 40-45 دقيقة.'
							},
							{
								id: 10,
								execution: 'يُرفع عن النار ويُترك لمدة 4 ساعات على الأقل حتى يبرد جيدًا.'
							},
							{
								id: 11,
								execution: 'تقدم مع السكر والعسل والقرفة والنعناع.'
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
							name: 'الكاتب',
							email: '',
							phone: '',
							role: 'Admin',
							image: 'https://picsum.photos/id/237/40/40'
						},
						date: new Date('2020-6-22 18:46:10'),
						content: 'مرحباً بالجميع، لقد عملنا بجد مع الفريق لإحضار مقالات جديدة. لقد مرت بضعة أشهر حتى أطلقناها في حالة السفر وإطلاق النار، ونأمل أن تعجبك.',
						replies: [
							{
								id: 1,
								author: {
									id: 2,
									name: 'المستخدم',
									email: '',
									phone: '',
									role: 'Customer',
									image: 'https://picsum.photos/id/237/40/40'
								},
								date: new Date('2020-6-22'),
								content: 'لا تقلق بشأن ذلك، يسعدنا قراءة قصص جديدة. كان الوقت الذي كنا ننتظره مجنونًا، لكن النتائج رائعة! لقد قمت بعمل ملحمي. الآن أنا فقط بحاجة لشراء واحدة.',
								replies: []
							}
						]
					}
				],
				video: 'https://www.youtube.com/embed/KedPMjRSTYM'
			};
		}
		else {
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
						id: 2,
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
						id: 3,
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
		}

		this.breadcrumb[2].text = this.recipe.title;
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
