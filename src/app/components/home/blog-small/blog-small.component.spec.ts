import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSmallComponent } from './blog-small.component';

describe('BlogSmallComponent', () => {
	let component: BlogSmallComponent;
	let fixture: ComponentFixture<BlogSmallComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BlogSmallComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogSmallComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
