import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { RtlService } from '../../services/rtl/rtl.service';
import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-category-search-input-group',
	templateUrl: './category-search-input-group.component.html',
	styleUrls: ['./category-search-input-group.component.scss']
})
export class CategorySearchInputGroupComponent implements OnInit, OnDestroy {
	@Input() categories: Category[] = [];
	@Output() onSearch: EventEmitter<{ search: string, category: Category }> = new EventEmitter<{ search: string, category: Category }>();
	@ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	selectedCategory!: Category;

	constructor(private rtlService: RtlService) { }

	ngOnInit(): void {
		let subscription = this.rtlService.rtlSubject$.subscribe(rtl => {
			this.rtl = rtl;
		});
		this.subscriptions.push(subscription);

		if (this.categories.length > 1) {
			this.selectedCategory = this.categories[0];
		}
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	onCategorySelected(category: Category) {
		this.selectedCategory = category;
	}

	onSearchKeyPressed(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.emitSearchEvent();
		}
	}

	onSearchIconClicked(event: MouseEvent) {
		this.emitSearchEvent();
	}

	emitSearchEvent() {
		this.onSearch.emit({
			search: this.searchInput.nativeElement.value,
			category: this.selectedCategory
		});
	}
}
