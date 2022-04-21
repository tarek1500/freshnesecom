import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../interfaces/blog.interface';

@Component({
	selector: 'app-blog-medium',
	templateUrl: './blog-medium.component.html',
	styleUrls: ['./blog-medium.component.scss']
})
export class BlogMediumComponent implements OnInit {
	@Input() blog!: Blog;

	constructor() { }

	ngOnInit(): void {
	}

}
