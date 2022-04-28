import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInputGroupComponent } from './stock-input-group.component';

describe('StockInputGroupComponent', () => {
	let component: StockInputGroupComponent;
	let fixture: ComponentFixture<StockInputGroupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ StockInputGroupComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StockInputGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
