import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../../../interfaces/blog.interface';

@Component({
	selector: 'app-related-blogs',
	templateUrl: './related-blogs.component.html',
	styleUrls: ['./related-blogs.component.scss']
})
export class RelatedBlogsComponent implements OnInit {
	@Input() blogs!: Blog[];

	constructor() { }

	ngOnInit(): void {
	}

}
