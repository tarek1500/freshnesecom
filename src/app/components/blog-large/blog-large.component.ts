import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-large',
	templateUrl: './blog-large.component.html',
	styleUrls: ['./blog-large.component.scss']
})
export class BlogLargeComponent implements OnInit {
	@Input() blog!: Blog;

	constructor() { }

	ngOnInit(): void { }
}
