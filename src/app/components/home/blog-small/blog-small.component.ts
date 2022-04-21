import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-small',
	templateUrl: './blog-small.component.html',
	styleUrls: ['./blog-small.component.scss']
})
export class BlogSmallComponent implements OnInit {
	@Input() blog!: Blog;

	constructor() { }

	ngOnInit(): void {
	}

}
