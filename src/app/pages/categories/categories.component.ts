import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	breadcrumb: Breadcrumb[] = [
		{ translate: 'translate.components.breadcrumb.home', text: 'Home', link: '/' },
		{ translate: 'translate.components.breadcrumb.categories', text: 'Categories', link: '' }
	];
	categories!: Category[];

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadCategories();
		});
		this.subscriptions.push(subscription);
	}

	loadCategories() {
		if (this.rtl) {
			this.categories = [
				{
					id: 1,
					name: 'مخبز',
					slug: 'bakery',
					subcategories: []
				},
				{
					id: 2,
					name: 'فاكهة و خضراوات',
					slug: 'fruit-and-vegetables',
					subcategories: []
				},
				{
					id: 3,
					name: 'فاكهة',
					slug: 'fruits',
					subcategories: []
				},
				{
					id: 4,
					name: 'خضراوات',
					slug: 'vegetables',
					subcategories: []
				},
				{
					id: 5,
					name: 'لحم و سمك',
					slug: 'meat-and-fish',
					subcategories: []
				},
				{
					id: 6,
					name: 'لحم',
					slug: 'meat',
					subcategories: []
				},
				{
					id: 7,
					name: 'سمك',
					slug: 'fish',
					subcategories: []
				},
				{
					id: 8,
					name: 'مشروبات',
					slug: 'drinks',
					subcategories: []
				},
				{
					id: 9,
					name: 'مطبخ',
					slug: 'kitchen',
					subcategories: []
				},
				{
					id: 10,
					name: 'تغذية خاصة',
					slug: 'special-nutrition',
					subcategories: []
				},
				{
					id: 11,
					name: 'طفل',
					slug: 'baby',
					subcategories: []
				},
				{
					id: 12,
					name: 'صيدلة',
					slug: 'pharmacy',
					subcategories: []
				}
			];
		}
		else {
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
}
