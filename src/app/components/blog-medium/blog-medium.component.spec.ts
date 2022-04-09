import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMediumComponent } from './blog-medium.component';

describe('BlogMediumComponent', () => {
	let component: BlogMediumComponent;
	let fixture: ComponentFixture<BlogMediumComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BlogMediumComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogMediumComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
