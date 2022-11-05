import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';
import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-category-search-input-group',
	templateUrl: './category-search-input-group.component.html',
	styleUrls: ['./category-search-input-group.component.scss']
})
export class CategorySearchInputGroupComponent implements OnInit, OnChanges, OnDestroy {
	@Input() categories: Category[] = [];
	@Output() onSearch: EventEmitter<{ search: string, category: Category }> = new EventEmitter<{ search: string, category: Category }>();
	@ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;
	selectedCategory: Category = {
		id: 0,
		name: '',
		slug: '',
		subcategories: []
	};

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);

		if (this.categories.length > 0) {
			this.selectedCategory = this.categories[0];
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['categories'].currentValue !== changes['categories'].previousValue) {
			this.selectedCategory = this.categories.find(category => category.id === this.selectedCategory.id)!;
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
