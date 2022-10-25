import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySearchInputGroupComponent } from './category-search-input-group.component';

describe('CategorySearchInputGroupComponent', () => {
	let component: CategorySearchInputGroupComponent;
	let fixture: ComponentFixture<CategorySearchInputGroupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CategorySearchInputGroupComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CategorySearchInputGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
