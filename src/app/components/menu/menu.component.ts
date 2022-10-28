import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	isMenuCollapsed: boolean = true;
	categories!: Category[];

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;

			this.loadCategories();
		});
		this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	loadCategories() {
		if (this.rtl) {
			this.categories = [
				{
					id: 1,
					name: 'مخبز',
					slug: 'bakery',
					subcategories: [
						{
							id: 1,
							name: 'مخبز',
							slug: 'bakery',
							subcategories: []
						},
						{
							id: 2,
							name: 'مخبز',
							slug: 'bakery',
							subcategories: []
						}
					]
				},
				{
					id: 2,
					name: 'فواكه و خضراوات',
					slug: 'fruit-and-vegetables',
					subcategories: [
						{
							id: 1,
							name: 'فواكه و خضراوات',
							slug: 'fruit-and-vegetables',
							subcategories: []
						},
						{
							id: 2,
							name: 'فواكه و خضراوات',
							slug: 'fruit-and-vegetables',
							subcategories: []
						}
					]
				},
				{
					id: 3,
					name: 'لحم و سمك',
					slug: 'meat-and-fish',
					subcategories: [
						{
							id: 1,
							name: 'لحم و سمك',
							slug: 'meat-and-fish',
							subcategories: []
						},
						{
							id: 2,
							name: 'لحم و سمك',
							slug: 'meat-and-fish',
							subcategories: []
						}
					]
				},
				{
					id: 4,
					name: 'مشروبات',
					slug: 'drinks',
					subcategories: [
						{
							id: 1,
							name: 'مشروبات',
							slug: 'drinks',
							subcategories: []
						},
						{
							id: 2,
							name: 'مشروبات',
							slug: 'drinks',
							subcategories: []
						}
					]
				},
				{
					id: 5,
					name: 'مطبخ',
					slug: 'kitchen',
					subcategories: [
						{
							id: 1,
							name: 'مطبخ',
							slug: 'kitchen',
							subcategories: []
						},
						{
							id: 2,
							name: 'مطبخ',
							slug: 'kitchen',
							subcategories: []
						}
					]
				},
				{
					id: 6,
					name: 'تغذية خاصة',
					slug: 'special-nutrition',
					subcategories: [
						{
							id: 1,
							name: 'التغذية الخاصة',
							slug: 'special-nutrition',
							subcategories: []
						},
						{
							id: 2,
							name: 'التغذية الخاصة',
							slug: 'special-nutrition',
							subcategories: []
						}
					]
				},
				{
					id: 7,
					name: 'طفل',
					slug: 'baby',
					subcategories: [
						{
							id: 1,
							name: 'الطفل',
							slug: 'baby',
							subcategories: []
						},
						{
							id: 2,
							name: 'الطفل',
							slug: 'baby',
							subcategories: []
						}
					]
				},
				{
					id: 8,
					name: 'صيدلة',
					slug: 'pharmacy',
					subcategories: [
						{
							id: 1,
							name: 'صيدلة',
							slug: 'pharmacy',
							subcategories: []
						},
						{
							id: 2,
							name: 'صيدلة',
							slug: 'pharmacy',
							subcategories: []
						}
					]
				}
			];
		}
		else {
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
	}
}
