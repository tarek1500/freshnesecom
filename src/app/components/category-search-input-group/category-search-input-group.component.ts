import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
	translateSubscription!: Subscription;
	rtl: boolean = false;
	selectedCategory!: Category;

	constructor(private translateService: TranslateService) { }

	ngOnInit(): void {
		this.translateSubscription = this.translateService.onLangChange.subscribe(event => {
			this.rtl = event.translations.direction === 'rtl';
		});

		if (this.categories.length > 1) {
			this.selectedCategory = this.categories[0];
		}
	}

	ngOnDestroy(): void {
		this.translateSubscription.unsubscribe();
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
