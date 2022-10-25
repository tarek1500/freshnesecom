import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLargeComponent } from './blog-large.component';

describe('BlogLargeComponent', () => {
	let component: BlogLargeComponent;
	let fixture: ComponentFixture<BlogLargeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BlogLargeComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogLargeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
