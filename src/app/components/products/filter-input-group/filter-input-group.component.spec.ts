import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputGroupComponent } from './filter-input-group.component';

describe('FilterInputGroupComponent', () => {
	let component: FilterInputGroupComponent;
	let fixture: ComponentFixture<FilterInputGroupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ FilterInputGroupComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterInputGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
