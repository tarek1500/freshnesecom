import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Category } from '../../interfaces/category.interface';

@Component({
	selector: 'app-category-search-input-group',
	templateUrl: './category-search-input-group.component.html',
	styleUrls: ['./category-search-input-group.component.scss']
})
export class CategorySearchInputGroupComponent implements OnInit {
	@Input() categories: Category[] = [];
	@Output() onSearch: EventEmitter<{ search: string, category: Category }> = new EventEmitter<{ search: string, category: Category }>();
	@ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
	selectedCategory!: Category;

	constructor() { }

	ngOnInit(): void {
		if (this.categories.length > 1) {
			this.selectedCategory = this.categories[0];
		}
	}

	onCategorySelected(category: Category) {
		this.selectedCategory = category;
	}

	onSearchKeyPressed(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();

			this.onSearch.emit({
				search: this.searchInput.nativeElement.value,
				category: this.selectedCategory
			});
		}
	}

	onSearchIconClicked(event: MouseEvent) {
		this.onSearch.emit({
			search: this.searchInput.nativeElement.value,
			category: this.selectedCategory
		});
	}
}
