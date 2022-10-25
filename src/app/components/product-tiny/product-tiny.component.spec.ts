import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTinyComponent } from './product-tiny.component';

describe('ProductTinyComponent', () => {
	let component: ProductTinyComponent;
	let fixture: ComponentFixture<ProductTinyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductTinyComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductTinyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
